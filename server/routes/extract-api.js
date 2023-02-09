/*
 * All routes for extact url info are defined here
 */

const express = require("express");
const router = express.Router();
const {extract} = require("../helper/screenshot");

/**
 * Get title, description, thumbnail for a url
 * @return {json} json containing url info
 */
router.post("/", (req, res) => {
  const url = req.body.url;
  console.log('url',url);
  extract(url)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(`Error extracting info for ${url}`, err);
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;