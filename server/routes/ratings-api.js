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

/**
 * Save new rating
 * @return {json} rating that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const ratingData = req.body;

  q_ratings
    .postRating(ratingData)
    .then((data) => {
      console.log("Rating save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new rating", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing rating
 * @return {json} rating that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const ratingData = req.body;

  q_ratings
    .updateRating(ratingData)
    .then((data) => {
      console.log("Rating updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating rating", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
