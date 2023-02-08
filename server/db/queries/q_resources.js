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
  q.select = "SELECT resources.* ";
  q.from = "FROM resources ";
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
      ? `${q.where} AND resources.deleted_at IS NULL`
      : "WHERE resources.deleted_at IS NULL";
  }

  if (options.resource.is_deleted === true) {
    q.where = q.where
      ? `${q.where} AND resources.deleted_at IS NOT NULL`
      : "WHERE resources.deleted_at IS NOT NULL";
  }

  if (options.resource.created_by) {
    q.counter++;
    q.where = q.where
      ? `${q.where} AND resources.profile_id = $${q.counter}`
      : `WHERE resources.profile_id = $${q.counter}`;
    q.params.push(options.resource.created_by);
  }

  if (options.resource.created_last_num_hours) {
    q.where = q.where
      ? `${q.where} AND resources.created_at >= current_timestamp - interval '${options.resource.created_last_num_hours} hours'`
      : `WHERE resources.created_at >= current_timestamp - interval '${options.resource.created_last_num_hours} hours'`;
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
