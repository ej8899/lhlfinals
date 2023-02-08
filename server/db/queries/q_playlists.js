const db = require("../connection");

/**
 * Get all playlists by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all playlists in db that are not deleted limit by 20.
 */
const getPlaylistsByResourceId = (id) => {
  let query = `
  select
  *
  from
    playlists
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
const postPlaylist = (data) => {
  let query = `
  INSERT INTO
    playlists 
      (resource_id, profile_id, is_playlist)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.is_playlist
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating updated.
 */
const updatePlaylist = (data) => {
  let query = `
  UPDATE
    playlists
  SET
    is_playlist = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.is_playlist,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating deleted
 */
const deletePlaylist = (data) => {
  let query = `
  UPDATE
    playlists
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getPlaylistsByResourceId,
  postPlaylist,
  updatePlaylist,
  deletePlaylist
}