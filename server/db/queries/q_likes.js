const query = require('./common');

/**
* Get user likes from the resource id.
* @param {id: string} The resource id.
* @return {Promise<{}>} A promise of the likes.
*/
const getLikesWithResouceId = function(id) {
  return query(
    `SELECT * FROM likes WHERE resource_id=$1 AND deleted_at IS NULL;`,
    [id], result => result.rows
  );
};
exports.getLikesWithResouceId = getLikesWithResouceId;

/**
* Add a new like.
* @param {{resourceId: string, profileId: string, commentId: string, isLiked: boolean}} like
* @return {Promise<{}>} A promise of the like.
*/
const addLike = function(like) {
const queryValue = [like.resourceId, like.profileId, like.commentId, like.isLiked];
  return query(
    `INSERT INTO likes (resource_id, profile_id, comment_id, is_liked) values ($1, $2, $3, $4) RETURNING *;`,
    queryValue, result => result.rows[0]);
};
exports.addLike = addLike;

/**
* Update a like.
* @param {{id: string, resourceId: string, profileId: string, commentId: string, isLiked: boolean}} like
* @return {Promise<{}>} A promise of the like.
*/
const updateLikeWithId = function(like) {
  const queryValue = [
    like.id,
    like.resourceId,
    like.profileId,
    like.commentId,
    like.isLiked,
  ];
  return query(`
    UPDATE likes SET (resource_id, profile_id, comment_id, is_liked, updated_at) = ($2, $3, $4, $5, NOW())
    WHERE id=$1 AND deleted_at IS NULL RETURNING *;`,
    queryValue, result => result.rows[0]
  );
};
exports.updateLikeWithId = updateLikeWithId;

/**
* Delete a like.
* @param {id: string} id
* @return {Promise<{}>} A promise of the like.
*/
const deleteLikeWithId = function(id) {
  return query(`UPDATE likes SET deleted_at=NOW() WHERE id=$1 RETURNING *;`, [id], result => result.rows[0]);
};
exports.deleteLikeWithId = deleteLikeWithId;