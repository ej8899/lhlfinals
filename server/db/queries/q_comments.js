const db = require("../connection");

/**
 * Get all comments by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all comments in db that are not deleted limit by 20.
 */
const getCommentsByResourceId = (id) => {
  let query = `
  select
  *
  from
    comments
  where
    resource_id = $1 AND deleted_at IS NULL
  ORDER BY
    created_at DESC;`;

  const params = [id];
  return db.query(query, params).then((data) => data.rows);
};


/**
 * Insert new comment
 * @param {json} comment data
 * @return {Promise<{}>} A promise of the comment inserted.
 */
const postComment = (data) => {
  let query = `
  INSERT INTO
    comments
    (
      resource_id,
      profile_id,
      comment_id,
      comment,
      is_private
    )
    VALUES
      ($1, $2, $3, $4, $5) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.comment_id,
    data.comment,
    data.is_private
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing comment
 * @param {json} comment data
 * @return {Promise<{}>} A promise of the comment updated.
 */
const updateComment = (data) => {
  let query = `
  UPDATE
    comments
  SET
    comment = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.comment,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting comment
 * @param {json} comment data
 * @return {Promise<{}>} A promise of the comment deleted
 */
const deleteComment = (data) => {
  let query = `
  UPDATE
    comments
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getCommentsByResourceId,
  postComment,
  updateComment,
  deleteComment
}