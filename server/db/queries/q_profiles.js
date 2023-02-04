const db = require('../connection');

const query = (text, params, callback) => {
  const start = Date.now();
  return db.query(text, params)
  .then(result => {
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, params, rows: result.rowCount });
    return callback(result);
  })
  .catch(err => console.log(err.message));
};

/**
* Get user pfofiles from the user id.
* @param {id: string} The id of the user.
* @return {Promise<{}>} A promise of the profiles.
*/
const getProfilesWithUserId = function(id) {
  return query(
    `SELECT p.*, u.email FROM profiles AS p
    LEFT JOIN users AS u ON p.user_id=u.id
    WHERE u.id=$1 AND u.deleted_at IS NULL AND p.deleted_at IS NULL;`,
    [id], result => result.rows
  );
};
exports.getProfilesWithUserId = getProfilesWithUserId;

/**
* Get user pfofiles from the user id.
* @param {id: string} The id of the user.
* @return {Promise<{}>} A promise of the profiles.
*/
const getProfileWithId = function(id) {
  return query(
    `SELECT p.*, u.email FROM profiles AS p
    LEFT JOIN users AS u ON p.user_id=u.id
    WHERE p.id=$1 AND u.deleted_at IS NULL AND p.deleted_at IS NULL;`,
    [id], result => result.rows[0]
  );
};
exports.getProfileWithId = getProfileWithId;

/**
* Add a new profile.
* @param {{userId: string, firstName: string, lastName: string, avatar: string}} profile
* @return {Promise<{}>} A promise of the profile.
*/
const addProfile = function(profile) {
const queryValue = [profile.userId, profile.firstName, profile.lastName, profile.avatar];
  return query(`INSERT INTO profiles (user_id, first_name, last_name, avatar) values ($1, $2, $3, $4) RETURNING *;`, queryValue, result => result.rows[0]);
};
exports.addProfile = addProfile;

/**
* Update a profile.
* @param {{id: string, userId: string, firstName: string, lastName: string, avatar: string}} profile
* @return {Promise<{}>} A promise of the profile.
*/
const updateProfilerWithId = function(profile) {
  const queryValue = [profile.id, profile.userId, profile.firstName, profile.lastName, profile.avatar];
  return query(`
    UPDATE profiles SET (user_id, first_name, last_name, avatar, updated_at) = ($2, $3, $4, $5, NOW()) WHERE id=$1 AND deleted_at IS NULL RETURNING *;`,
    queryValue, result => result.rows[0]
  );
};
exports.updateProfilerWithId = updateProfilerWithId;

/**
* Delete a profile.
* @param {id: string} id
* @return {Promise<{}>} A promise of the profile.
*/
const deleteProfileWithId = function(id) {
  return query(`UPDATE profiles SET deleted_at=NOW() WHERE id=$1 RETURNING *;`, [id], result => result.rows[0]);
};
exports.deleteProfileWithId = deleteProfileWithId;