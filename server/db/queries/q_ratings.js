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
