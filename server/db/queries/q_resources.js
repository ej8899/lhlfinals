const db = require('../connection');

const getResources = () => {
  return db.query('SELECT * FROM resources WHERE deleted_at = $1 ORDER BY id LIMIT 10;')
    .then(data => {
      return data.rows;
    },['NULL']);
};