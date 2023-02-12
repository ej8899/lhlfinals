module.exports = function(router, database) {
  // Get icons status with profile id
  router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const statuses = await database.getIconsStatusWithProfileId(id)
      .catch(err => res.status(500).json({ error: err.message }));

    if (!statuses) {
      res
        .status(500)
        .json({ error: "The status not found" });
      return;
    }

    res
      .status(200)
      .json({
        statuses: statuses.map(status => {
          return {
            ...status,
            is_liked: !!status.is_liked,
            is_favourite: !!status.is_favourite,
            is_bookmarked: !!status.is_bookmarked,
            is_playlist: !!status.is_playlist,
            is_reported: !!status.is_reported,
            is_recommended: !!status.is_recommended,
          };
        })
      });
  });

  return router;
};
