/*
 * All routes for recommends are defined here
 */

const express = require("express");
const router = express.Router();
const q_recommends = require("../db/queries/q_recommends");


/**
 * Get all recommends for a specific resource
 * @return {json} All recommends pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_recommends
    .getRecommendsByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving recommends", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new recommend
 * @return {json} recommend that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const recommendData = req.body;

  q_recommends
    .postRecommend(recommendData)
    .then((data) => {
      console.log("Recommend save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new recommend", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing recommend
 * @return {json} recommend that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const recommendData = req.body;

  q_recommends
    .updateRecommend(recommendData)
    .then((data) => {
      console.log("Recommend updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating recommend", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing recommend
 * @return {json} recommend that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const recommendId = req.params.id;
  const recommendData = {id : recommendId};

  q_recommends
    .deleteRecommend(recommendData)
    .then((data) => {
      console.log("Recommend deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting recommend", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
