/*
 * All routes for extact url info are defined here
 */

const express = require("express");
const router = express.Router();
const { extract, avatar } = require("../helper/screenshot");

/**
 * Get title, description, thumbnail for a url
 * @return {json} json containing url info
 */
router.post("/", (req, res) => {
  const url = req.body.url;
  console.log("url", url);
  extract(url)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(`Error extracting info for ${url}`, err);
      res.status(500).json({ error: err.message });
    });
});

router.get("/avatar/:gender", (req, res) => {
  const gender = req.params.gender;
  avatar(gender)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: message }));
});

module.exports = router;
