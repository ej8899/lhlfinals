module.exports = function(router, database) {
  // Get likes with resource id
  router.get('/resources/:id', async (req, res) => {
    const { id } = req.params;
    const likes = await database.getLikesWithResouceId(id)
                        .catch(err => res.status(500).json({ error: err.message }));

    if (!likes) {
      res
        .status(500)
        .json({ error: "The likes have not been existing" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Likes found",
        likes,
    });
  });

  // Create a like
  router.post('/', async (req, res) => {
    console.log(database);
    const like = req.body;
    const createdLike = await database.addLike(like)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!createdLike) {
      res
        .status(500)
        .json({ error: "Create like error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Like created",
        createdLike,
    });
  });

  // Update a like
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const like = req.body;
    const updatedLike = await database.updateLikeWithId({ id, ...like })
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!updatedLike) {
      res
        .status(500)
        .json({ error: "Update like error" });
      return;
    }

    res
      .status(500)
      .json({
        success: "Like updated",
        updatedLike,
    });
  });

  // Delete a Like
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedLike = await database.deleteLikeWithId(id)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!deletedLike) {
      res
        .status(500)
        .json({ error: "Delete like error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Like deleted",
        deletedLike,
    });
  });

  return router;
};
