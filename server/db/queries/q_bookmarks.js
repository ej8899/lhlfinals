const db = require("../connection");

/**
 * Get all bookmarks by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all bookmarks in db that are not deleted limit by 20.
 */
const getBookmarksByResourceId = (id) => {
  let query = `
  select
  *
  from
    bookmarks
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
const postBookmark = (data) => {
  let query = `
  INSERT INTO
    bookmarks 
      (resource_id, profile_id, is_bookmarked)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.is_bookmarked
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating updated.
 */
const updateBookmark = (data) => {
  let query = `
  UPDATE
    bookmarks
  SET
    is_bookmarked = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.is_bookmarked,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating deleted
 */
const deleteBookmark = (data) => {
  let query = `
  UPDATE
    bookmarks
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getBookmarksByResourceId,
  postBookmark,
  updateBookmark,
  deleteBookmark
}