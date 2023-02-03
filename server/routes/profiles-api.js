module.exports = function(router, database) {
  // Get profiles
  router.get('/', async (req, res) => {
    const { email } = req.body;
    const profiles = await database.getProfilesWithUserEmail(email)
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
  router.put('/', async (req, res) => {
    const profile = req.body;
    const updatedProfile = await database.updateProfilerWithId(profile)
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
  router.delete('/', async (req, res) => {
    const { id } = req.body;
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
