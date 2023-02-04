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
* Get user rankings from the resource id.
* @param {id: string} The resource id.
* @return {Promise<{}>} A promise of the rankings.
*/
const getRankingsWithResouceId = function(id) {
  return query(
    `SELECT * FROM rankings WHERE resource_id=$1 AND deleted_at IS NULL;`,
    [id], result => result.rows
  );
};
exports.getRankingsWithResouceId = getRankingsWithResouceId;

/**
* Add a new ranking.
* @param {{resourceId: string, profileId: string, name: string, scale: string, note: string}} ranking
* @return {Promise<{}>} A ranking of the ranking.
*/
const addRanking = function(ranking) {
const queryValue = [ranking.resourceId, ranking.profileId, ranking.name, ranking.scale, ranking.note];
  return query(
    `INSERT INTO rankings (resource_id, profile_id, name, scale, note) values ($1, $2, $3, $4, $5) RETURNING *;`,
    queryValue, result => result.rows[0]);
};
exports.addRanking = addRanking;

/**
* Update a ranking.
* @param {{id: string, resourceId: string, profileId: string, name: string, scale: string, note: string}} ranking
* @return {Promise<{}>} A promise of the ranking.
*/
const updateRankingWithId = function(ranking) {
  const queryValue = [
    ranking.id,
    ranking.resourceId,
    ranking.profileId,
    ranking.name,
    ranking.scale,
    ranking.note
  ];
  return query(`
    UPDATE rankings SET (resource_id, profile_id, name, scale, note, updated_at) = ($2, $3, $4, $5, $6, NOW())
    WHERE id=$1 AND deleted_at IS NULL RETURNING *;`,
    queryValue, result => result.rows[0]
  );
};
exports.updateRankingWithId = updateRankingWithId;

/**
* Delete a ranking.
* @param {id: string} id
* @return {Promise<{}>} A promise of the ranking.
*/
const deleteRankingWithId = function(id) {
  return query(`UPDATE rankings SET deleted_at=NOW() WHERE id=$1 RETURNING *;`, [id], result => result.rows[0]);
};
exports.deleteRankingWithId = deleteRankingWithId;
