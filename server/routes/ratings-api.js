/*
 * All routes for ratings are defined here
 */

const express = require("express");
const router = express.Router();
const q_ratings = require("../db/queries/q_ratings");


/**
 * Get all ratings for a specific resource
 * @return {json} All ratings pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_ratings
    .getRatingsByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving ratings", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Get average ratings for a specific resource
 * @return {json} Average ratings pertain to a resource id in db that are not deleted
 */
router.get("/average/resources/:id", (req, res) => {
  const id = req.params.id
  q_ratings
    .getAverageRatingsByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});



module.exports = router;
