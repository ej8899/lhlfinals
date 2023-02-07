/*
 * All routes for playlists are defined here
 */

const express = require("express");
const router = express.Router();
const q_playlists = require("../db/queries/q_playlists");


/**
 * Get all playlists for a specific resource
 * @return {json} All playlists pertain to a resource id in db that are not deleted
 */
router.get("/resources/:id", (req, res) => {
  const id = req.params.id
  q_playlists
    .getPlaylistsByResourceId(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("Error retrieving playlists", err);
      res.status(500).json({ error: err.message });
    });
});

/**
 * Save new playlist
 * @return {json} playlist that is saved
 * 
 */
router.post("/", (req, res) => {
  //const userId = req.session.userID;
  const playlistData = req.body;

  q_playlists
    .postPlaylist(playlistData)
    .then((data) => {
      console.log("Playlist save returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error saving new playlist", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Update existing playlist
 * @return {json} playlist that is updated
 * 
 */
router.put("/:id", (req, res) => {
  //const userId = req.session.userID;
  const playlistData = req.body;

  q_playlists
    .updatePlaylist(playlistData)
    .then((data) => {
      console.log("Playlist updated returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error updating playlist", err);
      return res.status(500).json({ error: err.message });
    });
});

/**
 * Delete existing playlist
 * @return {json} playlist that is deleted
 * 
 */
router.delete("/:id", (req, res) => {
  //const userId = req.session.userID;
  const playlistId = req.params.id;
  const playlistData = {id : playlistId};

  q_playlists
    .deletePlaylist(playlistData)
    .then((data) => {
      console.log("Playlist deleted returned obj: ", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error deleting playlist", err);
      return res.status(500).json({ error: err.message });
    });
});

module.exports = router;
