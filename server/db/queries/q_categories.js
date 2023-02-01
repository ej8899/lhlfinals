const db = require("../connection");

/**
 * Get all categories by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all categories in db that are not deleted limit by 20.
 */
const getCategoriesByResourceId = (id) => {
  let query = `
  select
  *
  from
    categories
  where
    resource_id = $1 AND deleted_at IS NULL
  ORDER BY
    index;`;
  const params = [id];

  return db.query(query, params).then((data) => data.rows);
};

/**
 * Insert new category
 * @param {json} category data
 * @return {Promise<{}>} A promise of the category inserted.
 */
const postCategory = (data) => {
  let query = `
  INSERT INTO
    categories 
      (resource_id, name, index)
    VALUES
      ($1, $2, $3) RETURNING *;`;
  const params = [
    data.resource_id,
    data.name,
    data.index
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Update exisiting category
 * @param {json} category data
 * @return {Promise<{}>} A promise of the category updated.
 */
const updateCategory = (data) => {
  let query = `
  UPDATE
    categories
  SET
    name = $1,
    index = $2,
    updated_at = NOW()
  WHERE
    id = $3 RETURNING *;`;
  const params = [
    data.name,
    data.index,
    data.id
  ];

  return db.query(query, params).then((data) => data.rows[0]);
};

/**
 * Delete exisiting category
 * @param {json} category data
 * @return {Promise<{}>} A promise of the category deleted
 */
const deleteCategory = (data) => {
  let query = `
  UPDATE
    categories
  SET
    deleted_at = NOW()
  WHERE
    id = $1 RETURNING *;`;
  const params = [data.id];

  return db.query(query, params).then((data) => data.rows[0]);
};

module.exports = {
  getCategoriesByResourceId,
  postCategory,
  updateCategory,
  deleteCategory,
};
