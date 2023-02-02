/*
 * All routes for comments are defined here
 */

const express = require("express");
const router = express.Router();
const q_comments = require("../db/queries/q_comments");


/**
 * Get all comments for a specific resource
 * @return {json} All comments pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_comments
    .getCommentsByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving comments", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new comment
 * @return {json} comment that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const commentData = req.body;

  q_comments
    .postComment(commentData)
    .then((data) => {
      console.log("Comment save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new comment", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing comment
 * @return {json} comment that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const commentData = req.body;

  q_comments
    .updateComment(commentData)
    .then((data) => {
      console.log("Comment updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating comment", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing comment
 * @return {json} comment that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const commentId = req.params.id;
  const commentData = {id : commentId};

  q_comments
    .deleteComment(commentData)
    .then((data) => {
      console.log("Comment deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting comment", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
