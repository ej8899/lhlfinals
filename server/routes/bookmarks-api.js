/*
 * All routes for bookmarks are defined here
 */

const express = require("express");
const router = express.Router();
const q_bookmarks = require("../db/queries/q_bookmarks");


/**
 * Get all bookmarks for a specific resource
 * @return {json} All bookmarks pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_bookmarks
    .getBookmarksByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving bookmarks", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new bookmark
 * @return {json} bookmark that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const bookmarkData = req.body;

  q_bookmarks
    .postBookmark(bookmarkData)
    .then((data) => {
      console.log("Bookmark save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new bookmark", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing bookmark
 * @return {json} bookmark that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const bookmarkData = req.body;

  q_bookmarks
    .updateBookmark(bookmarkData)
    .then((data) => {
      console.log("Bookmark updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating bookmark", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing bookmark
 * @return {json} bookmark that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const bookmarkId = req.params.id;
  const bookmarkData = {id : bookmarkId};

  q_bookmarks
    .deleteBookmark(bookmarkData)
    .then((data) => {
      console.log("Bookmark deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting bookmark", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
