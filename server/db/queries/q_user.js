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
* Get a single user from the database given their email.
* @param {String} email The email of the user.
* @return {Promise<{}>} A promise of the user.
*/
const getUserWithEmail = function(email) {
  return query(`SELECT * FROM users WHERE email=$1 AND deleted_at IS NULL`, [email], result => result.rows[0]);
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
* @param {{previousEmail: string, updatedEmail: string, updatedPassword: string}} user
* @return {Promise<{}>} A promise of the user.
*/
const updateUserWithEmail = function(user) {
  const queryValue = [user.previousEmail, user.updatedEmail, user.updatedPassword];
  return query(`UPDATE users SET email=$2, password=$3 updated_at=NOW() WHERE email=$1 RETURNING *;`, queryValue, result => result.rows[0]);
};
exports.updateUserWithEmail = updateUserWithEmail;

/**
* Delete a user.
* @param {email: string} email
* @return {Promise<{}>} A promise of the user.
*/
const deleteUserWithEmail = function(email) {
  return query(`UPDATE users SET deleted_at=NOW() WHERE email=$1 RETURNING *;`, [email], result => result.rows[0]);
};
exports.deleteUserWithEmail = deleteUserWithEmail;
