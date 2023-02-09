/*
 * All routes for resources created by all users are defined here
 */

const express = require("express");
const router = express.Router();
const q_resources = require("../db/queries/q_resources");
const { screenshot } = require("../helper/screenshot");

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
 * Get all resources with addition of likes, categories, rankings and ratings
 * @return {json} All resources in db that are not deleted limit by 20.
 */
router.get("/withAddition", (req, res) => {
  q_resources
    .getAllResourcesWithAddition()
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
  const resourceData ={...req.body};

  if (!resourceData.thumbnail) {
    console.log("creating a screenshot request")
    screenshot(resourceData.url)
    .then((data) => {
      console.log("screeshot data",data);
      resourceData.thumbnail = JSON.parse(data)["screenshot"];
      console.log("resource data before saving",resourceData);
      q_resources.postResource(resourceData)
      .then((savedData) => {
        console.log("Resource save returned obj: ", savedData);
        return res.status(200).json(savedData);
      })
      .catch((err) => {
        console.log("Error saving new resource", err);
        return res.status(500).json({ error: err.message });
      });
    })
    .catch((error) => {
      console.log("Error getting thumbnail")
      res.status(400).send(error)
    });

  } else {
    q_resources
      .postResource(resourceData)
      .then((data) => {
        console.log("Resource save returned obj: ", data);
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log("Error saving new resource", err);
        return res.status(500).json({ error: err.message });
      });
  }
});

/**
 * Save new resource with Addition
 * @return {json} resource that is saved
 */
router.post("/withAddition", (req, res) => {
  //const userId = req.session.userID;
  const resourceData = { ...req.body };
  if (!resourceData.resource.thumbnail) {
    console.log("creating a screenshot request")
    screenshot(resourceData.resource.url)
    .then((data) => {
      console.log("screeshot data",data);
      resourceData.resource.thumbnail = JSON.parse(data)["screenshot"];
      console.log("resource data before saving",resourceData);
      q_resources.postResourceWithAddition(resourceData)
      .then((savedData) => {
        console.log("Resource save returned obj: ", savedData);
        return res.status(200).json(savedData);
      })
      .catch((err) => {
        console.log("Error saving new resource", err);
        return res.status(500).json({ error: err.message });
      });
    })
    .catch((error) => {
      console.log("Error getting thumbnail")
      res.status(400).send(error)
    });
  } else {
    q_resources
      .postResourceWithAddition(resourceData)
      .then((data) => {
        console.log("Resource save returned obj: ", data);
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log("Error saving new resource", err);
        return res.status(500).json({ error: err.message });
      });
  }
});

/**
 * Update existing resource
 * @return {json} resource that is updated
 *
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const resourceData = req.body;

  q_resources
    .updateResource(resourceData)
    .then((data) => {
      console.log("Resource updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating new resource", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing resource
 * @return {json} resource that is deleted
 *
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  //const resourceData = req.body;
  const resourceId = req.params.id;
  const resourceData = { id: resourceId };

  q_resources
    .deleteResource(resourceData)
    .then((data) => {
      console.log("Resource deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting new resource", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
