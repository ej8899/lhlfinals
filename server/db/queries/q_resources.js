const db = require("../connection");

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

/**
 * Get all resources with addition of likes, categories, rankings and ratings
 * @return {Promise<{}>} A promise of all resources in db that are not deleted limit by 20.
 */
const getAllResourcesWithAddition = () => {
  //const params = ["NOT NULL"];
  return db
    .query(
      `SELECT res.*, COUNT(DISTINCT l.id) AS likes, array[c.name] AS categories, AVG(ran.SCALE) AS ranking, AVG(rat.rate) AS rating
    FROM resources AS res
    LEFT JOIN likes AS l on res.id=l.resource_id
    LEFT JOIN categories AS c on res.id=c.resource_id
    LEFT JOIN rankings AS ran on res.id=ran.resource_id
    LEFT JOIN ratings AS rat on res.id=rat.resource_id
    WHERE res.deleted_at IS NULL
    GROUP BY res.id, c.name
    ORDER BY res.id LIMIT 20;`
    )
    .then((data) => {
      if (data.rows.length === 0) {
        return [];
      }

      const resources = [];
      data.rows.forEach((resource) => {
        if (resources.map((r) => r.id).includes(resource.id)) {
          const index = resources.findIndex((r) => r.id === resource.id);
          resources[index] = {
            ...resources[index],
            categories: resources[index].categories.concat(resource.categories),
          };
        } else {
          resources.push(resource);
        }
      });
      return resources;
    });
};

const getAllResourcesByOptions = (options) => {
  const q = {};
  q.select = "SELECT resources.*";
  q.from = "FROM resources";
  q.where = "";
  q.group = "";
  q.having = "";
  q.order = "";
  q.limit = "";
  q.counter = 0; //params counter
  q.query = "";
  q.params = [];

  if (options.resource.is_deleted === false) {
    q.where = q.where
      ? `${q.where} AND \nresources.deleted_at IS NULL`
      : "WHERE \nresources.deleted_at IS NULL";
  }

  if (options.resource.is_deleted === true) {
    q.where = q.where
      ? `${q.where} \nAND resources.deleted_at IS NOT NULL`
      : "WHERE \nresources.deleted_at IS NOT NULL";
  }

  if (options.resource.created_by) {
    q.counter++;
    q.where = q.where
      ? `${q.where} \nAND resources.profile_id = $${q.counter}`
      : `WHERE \nresources.profile_id = $${q.counter}`;
    q.params.push(options.resource.created_by);
  }

  if (options.resource.created_last_num_hours) {
    q.where = q.where
      ? `${q.where} \nAND resources.created_at >= current_timestamp - interval '${options.resource.created_last_num_hours} hours'`
      : `WHERE \nresources.created_at >= current_timestamp - interval '${options.resource.created_last_num_hours} hours'`;
  }

  if (Array.isArray(options.resource.categories)) {
    q.counter++;
    let names = `$${q.counter}`;
    q.params.push(options.resource.categories[0]);

    for (let x = 1; x < options.resource.categories.length; x++) {
      q.counter++;
      names += `,$${q.counter}`;
      q.params.push(options.resource.categories[x]);
    }

    q.where = q.where
      ? `${q.where} \nAND resources.id IN (
        SELECT
          resource_id
        FROM
          categories
        WHERE
          NAME in (${names})
      )`
      : `WHERE \nresources.id IN (
        SELECT
          resource_id
        FROM
          categories
        WHERE
          NAME in (${names})
      )`;
  }

  if (options.resource.minimum_average_rating) {
    q.counter++;

    q.select += ", \nAVG(ratings.rate) AS avg_rating";

    q.from += "\nLEFT JOIN ratings ON resources.id = ratings.resource_id";

    q.having = q.having
      ? `${q.having} \nAND AVG(ratings.rate) >= $${q.counter}`
      : `HAVING \nAVG(ratings.rate) >= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.minimum_average_rating);
  }

  if (options.resource.minimum_likes) {
    q.counter++;

    q.select += ", \ncount(likes.id) AS total_likes";

    q.from += "\nLEFT JOIN likes ON resources.id = likes.resource_id";

    q.where = q.where
      ? `${q.where} \nAND likes.is_liked = true`
      : `WHERE \nlikes.is_liked = true`;

    q.having = q.having
      ? `${q.having} \nAND COUNT(likes.id) >= $${q.counter}`
      : `HAVING \nCOUNT(likes.id) >= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.minimum_likes);
  }

  if (options.resource.minimum_is_recommended) {
    q.counter++;

    q.select += ", \nCOUNT(recommends.id) AS total_recommends";

    q.from += "\nLEFT JOIN recommends ON resources.id = recommends.resource_id";

    q.where = q.where
      ? `${q.where} \nAND recommends.is_recommended = true`
      : `WHERE \nrecommends.is_recommended = true`;

    q.having = q.having
      ? `${q.having} \nAND COUNT(recommends.id) >= $${q.counter}`
      : `HAVING \nCOUNT(recommends.id) >= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.minimum_is_recommended);
  }

  if (options.resource.minimum_average_ranking) {
    q.counter++;

    q.select += ", \nAVG(rankings.scale) AS avg_ranking";

    q.from += "\nLEFT JOIN rankings ON resources.id = rankings.resource_id";

    q.having = q.having
      ? `${q.having} \nAND AVG(rankings.scale) >= $${q.counter}`
      : `HAVING \nAVG(rankings.scale) >= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.minimum_average_ranking);
  }

  if (options.resource.maximum_average_ranking) {
    q.counter++;

    if (!q.select.includes("AVG(rankings.scale) AS avg_ranking")) {
      q.select += ", \nAVG(rankings.scale) AS avg_ranking";
    }

    if (
      !q.from.includes(
        "LEFT JOIN rankings ON resources.id = rankings.resource_id"
      )
    ) {
      q.from += "\nLEFT JOIN rankings ON resources.id = rankings.resource_id";
    }

    q.having = q.having
      ? `${q.having} \nAND AVG(rankings.scale) <= $${q.counter}`
      : `HAVING \nAVG(rankings.scale) <= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.maximum_average_ranking);
  }

  if (options.resource.excluded_minimum_average_ranking) {
    q.counter++;

    if (!q.select.includes("AVG(rankings.scale) AS avg_ranking")) {
      q.select += ", \nAVG(rankings.scale) AS avg_ranking";
    }

    if (
      !q.from.includes(
        "LEFT JOIN rankings ON resources.id = rankings.resource_id"
      )
    ) {
      q.from += "\nLEFT JOIN rankings ON resources.id = rankings.resource_id";
    }

    q.having = q.having
      ? `${q.having} \nAND NOT AVG(rankings.scale) >= $${q.counter}`
      : `HAVING \nNOT AVG(rankings.scale) >= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.excluded_minimum_average_ranking);
  }

  if (options.resource.excluded_maximum_average_ranking) {
    q.counter++;

    if (!q.select.includes("AVG(rankings.scale) AS avg_ranking")) {
      q.select += ", \nAVG(rankings.scale) AS avg_ranking";
    }

    if (
      !q.from.includes(
        "LEFT JOIN rankings ON resources.id = rankings.resource_id"
      )
    ) {
      q.from += "\nLEFT JOIN rankings ON resources.id = rankings.resource_id";
    }

    q.having = q.having
      ? `${q.having} \nAND NOT AVG(rankings.scale) <= $${q.counter}`
      : `HAVING \nNOT AVG(rankings.scale) <= $${q.counter}`;

    q.group = "GROUP BY \nresources.id";

    q.params.push(options.resource.excluded_maximum_average_ranking);
  }

  if (options.resource.limit) {
    q.counter++;
    q.limit = `LIMIT $${q.counter}`;
    q.params.push(options.resource.limit);
  }

  if (options.resource.order_by) {
    switch (options.resource.order_by) {
      case "most_liked":
        q.order = `ORDER BY likes.is_liked DESC`;
        break;
      case "top_rated":
        q.order = `ORDER BY ratings.rate DESC`;
        break;
      case "top_ranked":
        q.order = `ORDER BY rankings.scale DESC`;
        break;
      case "lowest_ranked":
        q.order = `ORDER BY rankings.scale ASC`;
        break;
      case "newest":
        q.order = `ORDER BY resources.created_at DESC`;
        break;
      case "alpha_a-z":
        q.order = `ORDER BY resources.title ASC`;
        break;
      default:
        q.order = `ORDER BY resources.title DESC`;
    }
  }

  //Build Query
  q.query = `${q.select} \n${q.from} \n${q.where} \n${q.group} \n${q.having} \n${q.order} \n${q.limit};`;

  //submit query to db
  console.log("query: ", q.query);
  console.log("params: ", q.params);
  return db.query(q.query, q.params).then((data) => data.rows);
};

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

module.exports = {
  getAllResources,
  getAllResourcesWithAddition,
  getAllResourcesByOptions,
  postResource,
  updateResource,
  deleteResource,
};
