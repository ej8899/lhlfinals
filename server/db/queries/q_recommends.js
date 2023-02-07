const db = require("../connection");

/**
 * Get all recommends by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all recommends in db that are not deleted limit by 20.
 */
const getRecommendsByResourceId = (id) => {
  let query = `
  select
  *
  from
    recommends
  where
    resource_id = $1 AND deleted_at IS NULL
  ORDER BY
    created_at DESC;`;

  const params = [id];
  return db.query(query, params).then((data) => data.rows);
};

/**
 * Insert new rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating inserted.
 */
const postRecommend = (data) => {
  let query = `
  INSERT INTO
    recommends 
      (resource_id, profile_id, is_recommend)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.is_recommend
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating updated.
 */
const updateRecommend = (data) => {
  let query = `
  UPDATE
    recommends
  SET
    is_recommend = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.is_recommend,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating deleted
 */
const deleteRecommend = (data) => {
  let query = `
  UPDATE
    recommends
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getRecommendsByResourceId,
  postRecommend,
  updateRecommend,
  deleteRecommend
}