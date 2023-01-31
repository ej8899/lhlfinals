const db = require("../connection");

/**
 * Get all resources comming from all users that are still active from db
 * @return {Promise<{}>} A promise of all resources in db that are not deleted limit by 20.
 */
const getAllResources = () => {
  //const params = ["NOT NULL"];
  return db
    .query(
      `SELECT * 
    FROM resources 
    WHERE deleted_at IS NULL
    ORDER BY id LIMIT 20;`
    )
    .then((data) => {
      return data.rows;
    });
};

const postResource = (data) => {
  let query = `
  INSERT INTO
    resources (
      profile_id,
      url,
      title,
      description,
      thumbnail
    )
    VALUES
      (
      ($1, $2, $3, $4, $5) RETURNING *;
      `;
  const params = [
    data.profileId,
    data.url,
    data.title,
    data.description,
    data.thumbnail
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getAllResources,
  postResource
};
