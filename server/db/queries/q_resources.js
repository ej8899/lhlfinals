const db = require("../connection");
const { postResourcesQueryHelper } = require("../../helper/query");

// ----------------------------------------------------------
/**
 * Get all resources comming from all users that are still active from db
 * @return {Promise<{}>} A promise of all resources in db that are not deleted limit by 20.
 */
const getAllResources = () => {
  //const params = ["NOT NULL"];
  return db
    .query(
      `SELECT *
    FROM resources
    WHERE deleted_at IS NULL
    ORDER BY id LIMIT 20;`
    )
    .then((data) => {
      return data.rows;
    });
};
// ----------------------------------------------------------

// ----------------------------------------------------------
/**
 * Get all resources with addition of likes, categories, rankings and ratings
 * @return {Promise<{}>} A promise of all resources in db that are not deleted limit by 20.
 */
const getAllResourcesWithAddition = (id = undefined) => {
  const whereClause = id === undefined ? 'WHERE res.deleted_at IS NULL' : `WHERE res.id=${id} AND res.deleted_at IS NULL`;
  const query = `
    SELECT res.*, COUNT(DISTINCT l.id) AS total_likes, array[c.name] AS categories, AVG(ran.SCALE) AS avg_ranking, AVG(rat.rate) AS avg_rating
    FROM resources AS res
    LEFT JOIN (SELECT * FROM likes WHERE likes.is_liked IS TRUE) AS l on res.id=l.resource_id
    LEFT JOIN categories AS c on res.id=c.resource_id
    LEFT JOIN rankings AS ran on res.id=ran.resource_id
    LEFT JOIN ratings AS rat on res.id=rat.resource_id
    ${whereClause}
    GROUP BY res.id, c.name
    ORDER BY res.id LIMIT 20;`;

  return db
    .query(query).then((data) => {
      if (data.rows.length === 0) {
        return [];
      }
      const resources = [];
      data.rows.forEach(resource => {
        if (resources.map(r => r.id).includes(resource.id)) {
          const index = resources.findIndex(r => r.id === resource.id);
          resources[index] = {
            ...resources[index],
            categories: resources[index].categories.concat(resource.categories) };
        } else {
          if (resource.categories[0] === null) {
            console.log("THIS WORKED")
            resource.categories = null;
          }
          resources.push(resource);
        }
      });
      return resources;
    });
};
// ----------------------------------------------------------


// ----------------------------------------------------------
const getAllResourcesByOptions = (options) => {
  const q = {};
  q.select = `
  SELECT
  resources.*, COUNT(DISTINCT true_like.id) as total_likes,
  AVG(ratings.rate) as avg_rating,
  count(DISTINCT true_recommends.is_recommended) as total_recommends,
  AVG(rankings.scale) as avg_ranking
  `;
  q.from = `
  FROM
  resources
  LEFT JOIN (SELECT * FROM likes WHERE likes.is_liked IS TRUE) as true_like ON resources.id = true_like.resource_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  LEFT JOIN recommends ON resources.id = recommends.resource_id
  LEFT JOIN likes ON resources.id = likes.resource_id 
  LEFT JOIN (SELECT * FROM recommends WHERE recommends.is_recommended IS TRUE) as true_recommends ON resources.id = true_recommends.resource_id
  LEFT JOIN rankings ON resources.id = rankings.resource_id


  `;
  q.where = `
  WHERE
  true_like.deleted_at IS NULL
  AND true_recommends.deleted_at IS NULL
  
  `;
  q.group = `
  GROUP BY
  resources.id


  `;
  q.having = "";
  q.order = "";
  q.limit = "";
  q.counter = 0; //params counter
  q.query = "";
  q.params = [];

  if (options.resource.is_deleted === false || !options.resource.is_deleted) {
    q.where = `${q.where} AND \nresources.deleted_at IS NULL`;
  }

  if (options.resource.is_deleted === true) {
    q.where = `${q.where} \nAND resources.deleted_at IS NOT NULL`;
  }

  if (options.resource.created_by) {
    q.counter++;
    q.where = `${q.where} \nAND resources.profile_id = $${q.counter}`;
    q.params.push(options.resource.created_by);
  }

  if (options.resource.created_last_num_hours) {
    q.where = `${q.where} \nAND resources.created_at >= current_timestamp - interval '${options.resource.created_last_num_hours} hours'`;
  }

  if (Array.isArray(options.resource.categories)) {
    if (options.resource.categories.length > 0) {
      q.counter++;
      let names = `$${q.counter}`;

      q.params.push(options.resource.categories[0]);

      for (let x = 1; x < options.resource.categories.length; x++) {
        q.counter++;
        names += `,$${q.counter}`;
        q.params.push(options.resource.categories[x]);
      }

      q.where = `${q.where} \nAND resources.id IN (
          SELECT
            resource_id
          FROM
            categories
          WHERE
            NAME in (${names})
        )`;
      } else {
        q.where = `${q.where} \nAND resources.id NOT IN (
          SELECT
            DISTINCT resource_id
          FROM
            categories
        )`;
      }
  }

  if (options.resource.minimum_average_rating) {
    q.counter++;

    q.having = q.having
      ? `${q.having} \nAND AVG(ratings.rate) >= $${q.counter}`
      : `HAVING \nAVG(ratings.rate) >= $${q.counter}`;

    q.params.push(options.resource.minimum_average_rating);
  }

  if (options.resource.minimum_likes) {
    q.counter++;

    q.where = `${q.where} \nAND likes.is_liked = true`;

    q.having = q.having
      ? `${q.having} \nAND COUNT(DISTINCT likes.id) >= $${q.counter}`
      : `HAVING \nCOUNT(DISTINCT likes.id) >= $${q.counter}`;

    q.params.push(options.resource.minimum_likes);
  }

  if (options.resource.minimum_is_recommended) {
    q.counter++;

    q.where = `${q.where} \nAND recommends.is_recommended = true`;

    q.having = q.having
      ? `${q.having} \nAND COUNT(DISTINCT recommends.id) >= $${q.counter}`
      : `HAVING \nCOUNT(DISTINCT recommends.id) >= $${q.counter}`;

    q.params.push(options.resource.minimum_is_recommended);
  }

  if (options.resource.minimum_average_ranking) {
    q.counter++;

    q.having = q.having
      ? `${q.having} \nAND AVG(rankings.scale) >= $${q.counter}`
      : `HAVING \nAVG(rankings.scale) >= $${q.counter}`;

    q.params.push(options.resource.minimum_average_ranking);
  }

  if (options.resource.maximum_average_ranking) {
    q.counter++;

    q.having = q.having
      ? `${q.having} \nAND AVG(rankings.scale) <= $${q.counter}`
      : `HAVING \nAVG(rankings.scale) <= $${q.counter}`;

    q.params.push(options.resource.maximum_average_ranking);
  }

  if (options.resource.excluded_minimum_average_ranking && options.resource.excluded_maximum_average_ranking) {
    q.counter++;

    q.having = q.having
      ? `${q.having} \nAND AVG(rankings.scale) NOT BETWEEN $${q.counter}`
      : `HAVING \nAVG(rankings.scale)  NOT BETWEEN $${q.counter}`;

    q.params.push(options.resource.excluded_minimum_average_ranking);

    q.counter++;

    q.having = `${q.having} \nAND $${q.counter}`
    
    q.params.push(options.resource.excluded_maximum_average_ranking)
  }

  /*USER FILTER*/
  if (options.user.profile_id) {
    q.select += `, \n${options.user.profile_id} AS user_profile_id, 
    myfavourites.is_favourite,
    mylikes.is_liked,
    mybookmarks.is_bookmarked,
    myplaylists.is_playlist,
    myreports.is_reported,
    myrecommends.is_recommended,
    myratings.rate AS my_Rating,
    myrankings.scale AS my_ranking`;

    q.from += `
    \nLEFT JOIN (SELECT * FROM favourites WHERE favourites.profile_id = ${options.user.profile_id}) as myfavourites ON myfavourites.resource_id = resources.id
    LEFT JOIN (SELECT * FROM likes WHERE likes.profile_id = ${options.user.profile_id}) as mylikes ON mylikes.resource_id = resources.id
    LEFT JOIN (SELECT * FROM bookmarks WHERE bookmarks.profile_id = ${options.user.profile_id}) as mybookmarks ON mybookmarks.resource_id = resources.id
    LEFT JOIN (SELECT * FROM playlists WHERE playlists.profile_id = ${options.user.profile_id}) as myplaylists ON myplaylists.resource_id = resources.id
    LEFT JOIN (SELECT * FROM reports WHERE reports.profile_id = ${options.user.profile_id}) as myreports ON myreports.resource_id = resources.id
    LEFT JOIN (SELECT * FROM recommends WHERE recommends.profile_id = ${options.user.profile_id}) as myrecommends ON myrecommends.resource_id = resources.id
    LEFT JOIN (SELECT * FROM ratings WHERE ratings.profile_id = ${options.user.profile_id}) as myratings ON myratings.resource_id = resources.id
    LEFT JOIN (SELECT * FROM rankings WHERE rankings.profile_id = ${options.user.profile_id}) as myrankings ON myrankings.resource_id = resources.id`;


    q.group += `
    \n, myfavourites.is_favourite,
    mylikes.is_liked,
    mybookmarks.is_bookmarked,
    myplaylists.is_playlist,
    myreports.is_reported,
    myrecommends.is_recommended,
    myratings.rate,
    myrankings.scale`


    if (options.user.is_liked === true || options.user.is_liked === false) {
      q.counter++;
      q.where = `${q.where} \nAND mylikes.is_liked = $${q.counter}`;
      q.params.push(options.user.is_liked);
    }

    if (
      options.user.is_favourite === true ||
      options.user.is_favourite === false
    ) {
      q.counter++;
      q.where = `${q.where} \nAND 
          myfavourites.is_favourite = $${q.counter}`;
      q.params.push(options.user.is_favourite);
    }

    if (
      options.user.is_bookmarked === true ||
      options.user.is_bookmarked === false
    ) {
      q.counter++;
      q.where = `${q.where} \nAND mybookmarks.is_bookmarked = $${q.counter}`;
      q.params.push(options.user.is_bookmarked);
    }

    if (
      options.user.is_playlist === true ||
      options.user.is_playlist === false
    ) {
      q.counter++;
      q.where = `${q.where} \nAND myplaylists.is_playlist = $${q.counter}`;
      q.params.push(options.user.is_playlist);
    }

    if (
      options.user.is_reported === true ||
      options.user.is_reported === false
    ) {
      q.counter++;
      q.where = `${q.where} \nAND myreports.is_reported = $${q.counter}`;
      q.params.push(options.user.is_reported);
    }

    if (
      options.user.is_recommended === true ||
      options.user.is_recommended === false
    ) {
      q.counter++;
      q.where = `${q.where} \nAND myrecommends.is_recommended = $${q.counter}`;
      q.params.push(options.user.is_recommended);
    }

    if (options.user.minimum_myRating) {
      q.counter++;
      q.having = q.having
        ? `${q.having} \nAND AVG(myratings.rate) >= $${q.counter}`
        : `HAVING \nAVG(myratings.rate) >= $${q.counter}`;
      q.params.push(options.user.minimum_myRating);
    }

    if (options.user.maximum_myRating) {
      q.counter++;
      q.having = q.having
        ? `${q.having} \nAND AVG(myratings.rate) <= $${q.counter}`
        : `HAVING \nAVG(myratings.rate) <= $${q.counter}`;
      q.params.push(options.user.maximum_myRating);
    }

    if (options.user.minimum_myRanking) {
      q.counter++;
      q.having = q.having
        ? `${q.having} \nAND AVG(myrankings.scale) >= $${q.counter}`
        : `HAVING \nAVG(myrankings.scale) >= $${q.counter}`;
      q.params.push(options.user.minimum_myRanking);
    }

    if (options.user.maximum_myRanking) {
      q.counter++;
      q.having = q.having
        ? `${q.having} \nAND AVG(myrankings.scale) <= $${q.counter}`
        : `HAVING \nAVG(myrankings.scale) <= $${q.counter}`;
      q.params.push(options.user.maximum_myRanking);
    }
  } else {
    /*NO USER PROFILE*/
    q.select += `, \nNULL AS user_profile_id,
    NULL AS is_liked,
    NULL AS is_favourite,
    NULL AS is_bookmarked,
    NULL AS is_playlist,
    NULL AS is_reported,
    NULL AS is_recommended,
    NULL AS my_rating,
    NULL AS my_ranking
    `;
  }

  if (options.resource.limit) {
    q.counter++;
    q.limit = `LIMIT $${q.counter}`;
    q.params.push(options.resource.limit);
  } else {
    q.counter++;
    q.limit = `LIMIT $${q.counter}`;
    q.params.push(20);
  }

  switch (options.resource.order_by) {
    case "alpha_a-z":
      q.order = `ORDER BY resources.title ASC`;
      break;
    case "alpha_z-a":
      q.order = `ORDER BY resources.title DESC`;
      break;
    case "newest":
      q.order = `ORDER BY resources.created_at DESC`;
      break;
    case "my_top_rated":
      q.order = `ORDER BY myratings.rate DESC`;
      break;
    case "my_lowest_rated":
      q.order = `ORDER BY myratings.rate ASC`;
      break;
    case "my_top_ranked":
      q.order = `ORDER BY myrankings.scale DESC`;
      break;
    case "my_lowest_ranked":
      q.order = `ORDER BY myrankings.scale ASC`;
      break;
    case "most_liked":
      q.order = `ORDER BY total_likes DESC`;
      break;
    case "top_rated":
      q.order = `ORDER BY avg_rating DESC`;
      break;
    case "top_ranked":
      q.order = `ORDER BY avg_ranking DESC`;
      break;
    case "lowest_ranked":
      q.order = `ORDER BY avg_ranking ASC`;
      break;
    default:
      q.order =  `ORDER BY resources.created_at ASC`;
  }

  //Build Query
  q.query = `${q.select} \n${q.from} \n${q.where} \n${q.group} \n${q.having} \n${q.order} \n${q.limit};`;

  //submit query to db
  console.log("query: ", q.query);
  console.log("params: ", q.params);
  return db.query(q.query, q.params).then((data) => data.rows);
};
// ----------------------------------------------------------


// ----------------------------------------------------------
/**
 * Insert new resource
 * @param {json} resource data
 * @return {Promise<{}>} A promise of the resource inserted.
 */
const postResource = (data) => {
  let query = `
  INSERT INTO
    resources (
      profile_id,
      url,
      title,
      description,
      thumbnail
    )
    VALUES
      ($1, $2, $3, $4, $5) RETURNING *;`;
  const params = [
    data.profile_id,
    data.url,
    data.title,
    data.description,
    data.thumbnail,
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};
// ----------------------------------------------------------

// ----------------------------------------------------------
/**
 * Insert new resource with addition
 * @param {json} resource data
 * @return {Promise<{}>} A promise of the resource inserted.
 */
const postResourceWithAddition = async (data) => {
  let resourceQuery = `
  INSERT INTO
    resources (
      profile_id,
      url,
      title,
      description,
      thumbnail
    )
    VALUES
      ($1, $2, $3, $4, $5) RETURNING *;`;
  const resourceParams = [
    data.resource.profile_id,
    data.resource.url,
    data.resource.title,
    data.resource.description,
    data.resource.thumbnail,
  ];

  try {
    await db.query('BEGIN');
    const resource = await db.query(resourceQuery, resourceParams).then((data) => data.rows[0]);
    if (data.user) {
      const postHelper = postResourcesQueryHelper(data, resource.id);
      for (helper of postHelper) {
        await db.query(helper.query, helper.params).then((data) => data.rows[0]);
      }
    }
    await db.query('COMMIT');
    const resourceWithAddition = await getAllResourcesWithAddition(resource.id);
    return {
      resource: resourceWithAddition[0],
      user: data.user,
    };
  } catch (err) {
    await db.query('ROLLBACK')
    throw err;
  }
};
// ----------------------------------------------------------

// ----------------------------------------------------------
/**
 * Update exisiting resource
 * @param {json} resource data
 * @return {Promise<{}>} A promise of the resource updated.
 */
const updateResource = (data) => {
  let query = `
  UPDATE
    resources
  SET
    url = $1,
    title = $2,
    description = $3,
    thumbnail = $4,
    updated_at = NOW()
  WHERE
    id = $5 RETURNING *;`;
  const params = [
    data.url,
    data.title,
    data.description,
    data.thumbnail,
    data.id,
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};
// ----------------------------------------------------------

// ----------------------------------------------------------
/**
 * Delete exisiting resource
 * @param {json} resource data
 * @return {Promise<{}>} A promise of the resource deleted
 */
const deleteResource = (data) => {
  let query = `
  UPDATE
    resources
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};
// ----------------------------------------------------------

module.exports = {
  getAllResources,
  getAllResourcesWithAddition,
  getAllResourcesByOptions,
  postResource,
  postResourceWithAddition,
  updateResource,
  deleteResource,
};