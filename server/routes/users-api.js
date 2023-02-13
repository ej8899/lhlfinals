const bcrypt = require('bcrypt');

/**
 * Check if a user exists with a given username and password
 * @param {String} email
 * @param {String} password
 * @param {Database} database
 */
const authenticateUser = async function(email, password, database) {
  const user = await database.getUserWithEmail(email)
    .catch(err => res.status(500).json({ error: err.message }));

  if (!user) {
    return null;
  }

  if (bcrypt.compareSync(password, user[0].password)) {
    return user;
  }
  return null;
};

module.exports = function(router, database) {
  // Get a user
  router.get('/', async (req, res) => {
    const user = req.body;
    const foundUser = await database.getUserWithEmail(user.email)
      .catch(err => res.status(500).json({ error: err.message }));

    if (foundUser.length === 0) {
      res
        .status(500)
        .json({ error: "The user has not been existing" });
      return;
    }

    res
      .status(200)
      .json({
        success: "User found",
        foundUser,
    });

  });

  // Create a user
  router.post('/', async (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    const foundUser = await database.getUserWithEmail(user.email)
      .catch(err => res.status(500).json({ error: err.message }));

    if (foundUser.length > 0) {
      res
        .status(500)
        .json({ error: "The user has been existing already" });
      return;
    }

    const createdUser = await database.addUser(user)
      .catch(err => res.status(500).json({ error: err.message }));

    if (!createdUser) {
      res
        .status(500)
        .json({ error: "Create user error" });
      return;
    }

    req.session.userId = user.id;
    res
      .status(200)
      .json({
        success: "User created",
        createdUser,
    });
  });

  // Update a user
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    user.updatedPassword = bcrypt.hashSync(user.updatedPassword, 12);

    const authenticatedUser = await authenticateUser(user.previousEmail, user.previousPassword, database);
    if (!authenticatedUser) {
      res
        .status(500)
        .json({ error: "Authentication error" });
      return;
    }

    const { updatedEmail, updatedPassword } = user;
    const updatedUser = await database.updateUser({ id, updatedEmail, updatedPassword })
      .catch(err => res.status(500).json({ error: err.message }));

    if (!updatedUser) {
      res
        .status(500)
        .json({ error: "Update user error" });
      return;
    }

    res
      .status(500)
      .json({
        success: "User updated",
        updatedUser,
    });

  });

  // Delete a user
  router.delete('/:id', async (req, res) => {
    const { userId } = req.session;

    if (!userId) {
      res
        .status(500)
        .json({ error: "Not logged in" });
      return;
    }

    const { id } = req.params;
    const deletedUser = await database.deleteUserWithId(id)
      .catch(err => res.status(500).json({ error: err.message }));

    if (!deletedUser) {
      res
        .status(500)
        .json({ error: "Delete user error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "User deleted",
        deletedUser,
    });
  });

  // Login
  router.post('/login', async (req, res) => {
    const user = req.body;
    const authenticatedUser = await authenticateUser(user.email, user.password, database);
    if (authenticatedUser.length === 0) {
      res
        .status(500)
        .json({ error: "Login error" });
      return;
    }

    req.session.userId = authenticatedUser[0].id;
    res
      .status(200)
      .json({
        success: "Logged in",
        user: authenticatedUser.map(user => {
          return {
            profile_id: user.profile_id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            avatar: user.avatar,
          }
        })
    });
  });

  // Logout
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res
      .status(200)
      .json({ success: "Logged out" });
  });

  return router;
};
