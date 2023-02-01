const db = require("../connection");

/**
 * Get all ratings by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all ratings in db that are not deleted limit by 20.
 */
const getRatingsByResourceId = (id) => {
  let query = `
  select
  *
  from
    ratings
  where
    resource_id = $1 AND deleted_at IS NULL
  ORDER BY
    created_at DESC;`;

  const params = [id];
  return db.query(query, params).then((data) => data.rows);
};

/**
 * Get average ratings by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of the avg ratings in db that are not deleted limit by 20.
 */
const getAverageRatingsByResourceId = (id) => {
  let query = `
  select
    resource_id, AVG(rate) AS average
  from
    ratings
  where
    resource_id = $1 AND deleted_at IS NULL
  GROUP BY resource_id;`;

  const params = [id];
  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Insert new rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating inserted.
 */
const postRating = (data) => {
  let query = `
  INSERT INTO
    ratings 
      (resource_id, profile_id, rate)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.rate
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating updated.
 */
const updateRating = (data) => {
  let query = `
  UPDATE
    ratings
  SET
    rate = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.rate,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getRatingsByResourceId,
  getAverageRatingsByResourceId,
  postRating,
  updateRating
}