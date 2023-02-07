/*
 * All routes for favourites are defined here
 */

const express = require("express");
const router = express.Router();
const q_favourites = require("../db/queries/q_favourites");


/**
 * Get all favourites for a specific resource
 * @return {json} All favourites pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_favourites
    .getFavouritesByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving favourites", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new favourite
 * @return {json} favourite that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const favouriteData = req.body;

  q_favourites
    .postFavourite(favouriteData)
    .then((data) => {
      console.log("Favourite save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new favourite", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing favourite
 * @return {json} favourite that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const favouriteData = req.body;

  q_favourites
    .updateFavourite(favouriteData)
    .then((data) => {
      console.log("Favourite updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating favourite", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing favourite
 * @return {json} favourite that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const favouriteId = req.params.id;
  const favouriteData = {id : favouriteId};

  q_favourites
    .deleteFavourite(favouriteData)
    .then((data) => {
      console.log("Favourite deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting favourite", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
