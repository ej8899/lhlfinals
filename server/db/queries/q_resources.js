const db = require("../connection");

/**
 * Get all resources comming from all users that are still active from db
 * @return {Promise<{}>} A promise of all resources in db that are not deleted limit by 20.
 */
const getAllResources = () => {
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
      data.rows.forEach(resource => {
        if (resources.map(r => r.id).includes(resource.id)) {
          const index = resources.findIndex(r => r.id === resource.id);
          resources[index] = { ...resources[index], categories: resources[index].categories.concat(resource.categories) };
        } else {
          resources.push(resource);
        }
      });
      return resources;
    });
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
  const params = [
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getAllResources,
  postResource,
  updateResource,
  deleteResource
};
