/*
 * All routes for resources created by all users are defined here
 */

const express = require('express');
const router = express.Router();
const q_resources = require('../db/queries/q_resources');

/*
API to get all quizzes owned by the user
*/
router.get('/', (req, res) => {
  //const userId = req.session.userID;

  q_resources.getResources
    .then(data => res.json(data))
    .catch((err) => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
