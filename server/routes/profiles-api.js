module.exports = function(router, database) {
  // Get profiles with user id
  router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const profiles = await database.getProfilesWithUserId(id)
                        .catch(err => res.status(500).json({ error: err.message }));

    if (!profiles) {
      res
        .status(500)
        .json({ error: "The profiles have not been existing" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Profiles found",
        profiles,
    });
  });

  // Get a profile with profile id
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const profile = await database.getProfileWithId(id)
                        .catch(err => res.status(500).json({ error: err.message }));

    if (!profile) {
      res
        .status(500)
        .json({ error: "The profile has not been existing" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Profile found",
        profile,
    });
  });

  // Create a profile
  router.post('/', async (req, res) => {
    const profile = req.body;

    const createdProfile = await database.addProfile(profile)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!createdProfile) {
      res
        .status(500)
        .json({ error: "Create profile error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Profile created",
        createdProfile,
    });
  });

  // Update a profile
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const profile = req.body;
    const updatedProfile = await database.updateProfilerWithId({ id, ...profile })
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!updatedProfile) {
      res
        .status(500)
        .json({ error: "Update profile error" });
      return;
    }

    res
      .status(500)
      .json({
        success: "Profile updated",
        updatedProfile,
    });
  });

  // Delete a Profile
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProfile = await database.deleteProfileWithId(id)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!deletedProfile) {
      res
        .status(500)
        .json({ error: "Delete profile error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "Profile deleted",
        deletedProfile,
    });
  });

  return router;
};
