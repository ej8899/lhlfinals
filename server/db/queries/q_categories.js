const db = require("../connection");

/**
 * Get all categories by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all categories in db that are not deleted.
 */
const getCategoriesByResourceId = (id) => {
  let query = `
  select
  *
  from
    categories
  where
    resource_id = $1 AND deleted_at IS NULL AND profile_id IS NULL
  ORDER BY
    index;`;

  const params = [id];

  return db.query(query, params).then((data) => data.rows);
};

/**
 * Get all categories's name by resource id that are still active from db
 * @param {number} id resource id
 * @return {Promise<{}>} A promise of all names in db that are not deleted.
 */
const getCategoriesNameByResourceId = (id) => {
  let query = `
  SELECT
    DISTINCT name
  FROM
    categories
  WHERE
    resource_id = $1
    AND deleted_at IS NULL
    AND profile_id IS NULL;
  `;

  const params = [id];

  return db.query(query, params).then((data) => data.rows);
};

/**
 * Get all personal categories
 * @param {number} resourceId resource id
 * @param {number} profieId profile id
 * @return {Promise<{}>} A promise of all names in db that are not deleted.
 */
const getCategoriesNameByResourceIdAndProfileId = (resourceId, profileId) => {
  let query = `
  SELECT
    DISTINCT name
  FROM
    categories
  WHERE
    resource_id = $1
    AND deleted_at IS NULL
    AND profile_id = $2;
  `;

  const params = [resourceId, profileId];

  return db.query(query, params).then((data) => data.rows);
};

/**
 * Get all categories by profile id that are still active from db
 * @param {number} id profile id of the original creator of the resource
 * @return {Promise<{}>} A promise of all categories in db that are not deleted.
 */
const getCategoriesByProfileId = (id) => {
  let query = `
  SELECT
    resources.profile_id as resource_profile_id,
    categories.*
  FROM
    categories
    JOIN resources ON categories.resource_id = resources.id
  WHERE
    categories.deleted_at IS NULL AND resources.profile_id = $1;
  `;

  const params = [id];

  return db.query(query, params).then((data) => data.rows);
};

/**
 * Get all categories by profile id and resource id that are still active from db
 * This is for "personal" level, meaning the user that logged in that created categories to a resource that are being retrieved back.
 * @param {number} profileId profile id inside the categories table
 * @param {number} resourceId resource id insde the categories table
 * @return {Promise<{}>} A promise of all categories in db that are not deleted.
 */
const getCategoriesByProfileIdAndResourceId = (profileId, resourceId) => {
  let query = `
  SELECT
    *
  FROM
    categories
  WHERE
    deleted_at IS NULL AND profile_id = $1 AND resource_id = $2;
  `;

  const params = [profileId, resourceId];

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
  const params = [data.resource_id, data.name, data.index];

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
  const params = [data.name, data.index, data.id];

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
  getCategoriesByProfileId,
  getCategoriesByProfileIdAndResourceId,
  getCategoriesNameByResourceId,
  getCategoriesNameByResourceIdAndProfileId,
  postCategory,
  updateCategory,
  deleteCategory,
};
