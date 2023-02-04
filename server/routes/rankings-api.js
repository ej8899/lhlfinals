module.exports = function(router, database) {
  // Get Rankings with user id
  router.get('/resources/:id', async (req, res) => {
    const { id } = req.params;
    const Rankings = await database.getRankingsWithResouceId(id)
                        .catch(err => res.status(500).json({ error: err.message }));

    if (!Rankings) {
      res
        .status(500)
        .json({ error: "The Rankings have not been existing" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Rankings found",
        Rankings,
    });
  });

  // Create a ranking
  router.post('/', async (req, res) => {
    const ranking = req.body;
    const createdRanking = await database.addRanking(ranking)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!createdRanking) {
      res
        .status(500)
        .json({ error: "Create Ranking error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Ranking created",
        createdRanking,
    });
  });

  // Update a ranking
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const ranking = req.body;
    const updatedRanking = await database.updateRankingWithId({ id, ...ranking })
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!updatedRanking) {
      res
        .status(500)
        .json({ error: "Update Ranking error" });
      return;
    }

    res
      .status(500)
      .json({
        success: "Ranking updated",
        updatedRanking,
    });
  });

  // Delete a ranking
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedRanking = await database.deleteRankingWithId(id)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!deletedRanking) {
      res
        .status(500)
        .json({ error: "Delete Ranking error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Ranking deleted",
        deletedRanking,
    });
  });

  return router;
};
