const db = require("../connection");

/**
 * Get all reports by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all reports in db that are not deleted limit by 20.
 */
const getReportsByResourceId = (id) => {
  let query = `
  select
  *
  from
    reports
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
const postReport = (data) => {
  let query = `
  INSERT INTO
    reports 
      (resource_id, profile_id, is_reported)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.is_reported
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating updated.
 */
const updateReport = (data) => {
  let query = `
  UPDATE
    reports
  SET
    is_reported = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.is_reported,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating deleted
 */
const deleteReport = (data) => {
  let query = `
  UPDATE
    reports
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getReportsByResourceId,
  postReport,
  updateReport,
  deleteReport
}