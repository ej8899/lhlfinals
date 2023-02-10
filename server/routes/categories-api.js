/*
 * All routes for categories are defined here
 */

const express = require("express");
const router = express.Router();
const q_categories = require("../db/queries/q_categories");

/**
 * Get all categories for a specific resource
 * @return {json} All categories pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_categories
    .getCategoriesByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/**
 * Get all categories by Profile Id
 * @return {json} All categories pertain to a profile in db that are not deleted
 */
router.get("/profiles/:id", (req, res) => {
  const id = req.params.id
  q_categories
    .getCategoriesByProfileId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/**
 * Get all categories by "personal" level specific to a resource
 * @return {json} All categories pertain to a profile in categories table and  that are not deleted
 */
router.get("/profiles/:profile_id/resources/:resource_id", (req, res) => {
  const profileId = req.params.profile_id;
  const resourceId = req.params.resource_id;
  q_categories
    .getCategoriesByProfileIdAndResourceId(profileId,resourceId)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new category
 * @return {json} category that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const categoryData = req.body;

  q_categories
    .postCategory(categoryData)
    .then((data) => {
      console.log("Category save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new category", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing category
 * @return {json} category that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const categoryData = req.body;

  q_categories
    .updateCategory(categoryData)
    .then((data) => {
      console.log("Category updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating category", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing category
 * @return {json} category that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const categoryId = req.params.id;
  const categoryData = {id : categoryId};

  q_categories
    .deleteCategory(categoryData)
    .then((data) => {
      console.log("Category deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting category", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
