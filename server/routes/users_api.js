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

  if (bcrypt.compareSync(password, user.password)) {
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

    if (!foundUser) {
      res
        .status(500)
        .json({ error: "The user has not been existing" });
      return;
    }

    res
      .status(200)
      .json({
        success: "User found",
        user: { id: foundUser.id , email: foundUser.email}
    });

  });

  // Create a user
  router.post('/', async (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    const foundUser = await database.getUserWithEmail(user.email)
                        .catch(err => res.status(500).json({ error: err.message }));

    if (foundUser) {
      res
        .status(500)
        .json({ error: "The user has not been existing" });
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
        user: { id: createdUser.id , email: createdUser.email}
    });
  });

  // Update a user
  router.put('/', async (req, res) => {
    const user = req.body;
    user.updatedPassword = bcrypt.hashSync(user.updatedPassword, 12);

    const authenticatedUser = await authenticateUser(user.previousEmail, user.previousPassword, database);
    if (!authenticatedUser) {
      res
        .status(500)
        .json({ error: "Authentication error" });
      return;
    }

    const { previousEmail, updatedEmail, updatedPassword } = user;
    const updatedUser = await database.updateUserWithEmail({ previousEmail, updatedEmail, updatedPassword })
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
        user: { id: updatedUser.id, email: updatedUser.email }
    });

  });

  // Delete a user
  router.delete('/', async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      res
        .status(500)
        .json({ error: "Not logged in" });
      return;
    }

    const user = req.body;
    const foundUser = await database.getUserWithEmail(user.email)
                        .catch(err => res.status(500).json({ error: err.message }));

    if (!foundUser) {
      res
        .status(500)
        .json({ error: "The user has not been existing" });
      return;
    }

    const deletedUser = await database.deleteUserWithEmail(user.email)
                          .catch(err => res.status(500).json({ error: err.message }));

    if (!deletedUser) {
      res
        .status(500)
        .json({ error: "Delete error" });
      return;
    }

    res
      .status(200)
      .json({
        success: "User deleted",
        user: { id: deletedUser.id, email: deletedUser.email }
    });
  });

  // Login
  router.post('/login', async (req, res) => {
    const user = req.body;
    const authenticatedUser = await authenticateUser(user.email, user.password, database);
    if (!authenticatedUser) {
      res
        .status(500)
        .json({ error: "Login error" });
      return;
    }

    req.session.userId = authenticatedUser.id;
    res
      .status(200)
      .json({
        success: "Logged in",
        user: { id: authenticatedUser.id , email: user.email}
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
