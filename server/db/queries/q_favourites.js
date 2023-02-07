const db = require("../connection");

/**
 * Get all favourites by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all favourites in db that are not deleted limit by 20.
 */
const getFavouritesByResourceId = (id) => {
  let query = `
  select
  *
  from
    favourites
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
const postFavourite = (data) => {
  let query = `
  INSERT INTO
    favourites 
      (resource_id, profile_id, is_favourite)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.profile_id,
    data.is_favourite
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update existing rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating updated.
 */
const updateFavourite = (data) => {
  let query = `
  UPDATE
    favourites
  SET
    is_favourite = $1,
    updated_at = NOW()
  WHERE
    id = $2 RETURNING *;`;
  const params = [
    data.is_favourite,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting rating
 * @param {json} rating data
 * @return {Promise<{}>} A promise of the rating deleted
 */
const deleteFavourite = (data) => {
  let query = `
  UPDATE
    favourites
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getFavouritesByResourceId,
  postFavourite,
  updateFavourite,
  deleteFavourite
}