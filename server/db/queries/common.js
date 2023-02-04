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

module.exports = query;
