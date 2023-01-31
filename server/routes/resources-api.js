/*
 * All routes for resources created by all users are defined here
 */

const express = require("express");
const router = express.Router();
const q_resources = require("../db/queries/q_resources");

/**
 * Get all resources comming from all users that are still active from db
 * @return {json} All resources in db that are not deleted limit by 20.
 */
router.get("/", (req, res) => {
  q_resources
    .getAllResources()
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new resource
 * @return {json} resource that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const resourceData = req.body;

  q_resources
    .postResource(resourceData)
    .then((data) => {
      console.log("Resouce save returned obj: ", data);
      return res.json(data);
    })
    .catch((err) => {
      console.log("Error saving new resource", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
