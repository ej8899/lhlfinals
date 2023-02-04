const query = require('./common');

/**
* Get a single user from the database given their email.
* @param {String} email The email of the user.
* @return {Promise<{}>} A promise of the user.
*/
const getUserWithEmail = function(email) {
  return query(`SELECT * FROM users WHERE email=$1 AND deleted_at IS NULL;`, [email], result => result.rows[0]);
};
exports.getUserWithEmail = getUserWithEmail;

/**
* Add a new user to the database.
* @param {{email: string, password: string}} user
* @return {Promise<{}>} A promise of the user.
*/
const addUser = function(user) {
const queryValue = [user.email, user.password];
  return query(`INSERT INTO users (email, password) values ($1, $2) RETURNING *;`, queryValue, result => result.rows[0]);
};
exports.addUser = addUser;

/**
* Update a user.
* @param {{id: string, updatedEmail: string, updatedPassword: string}} user
* @return {Promise<{}>} A promise of the user.
*/
const updateUser = function(user) {
  const queryValue = [user.id, user.updatedEmail, user.updatedPassword];
  return query(`UPDATE users SET email=$2, password=$3, updated_at=NOW() WHERE id=$1 RETURNING *;`, queryValue, result => result.rows[0]);
};
exports.updateUser = updateUser;

/**
* Delete a user.
* @param {id: string} user id
* @return {Promise<{}>} A promise of the user.
*/
const deleteUserWithId = function(id) {
  return query(`UPDATE users SET deleted_at=NOW() WHERE id=$1 RETURNING *;`, [id], result => result.rows[0]);
};
exports.deleteUserWithId = deleteUserWithId;
