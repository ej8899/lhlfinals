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

module.exports = router;
