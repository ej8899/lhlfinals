const bcrypt = require('bcrypt');

/**
 * Check if a user exists with a given username and password
 * @param {String} email
 * @param {String} password
 * @param {Database} database
 */
const authenticateUser = async function(email, password, database) {
  const user = await database.getUserWithEmail(email);
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
    const foundUser = await database.getUserWithEmail(user.email);

    if (!foundUser) {
      res.send({ error: "The user has not been existing" });
      return;
    }

    res.send({
      success: "User found",
      user: { id: foundUser.id , email: foundUser.email}
    });

  });

  // Create a user
  router.post('/', async (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    const foundUser = await database.getUserWithEmail(user.email);

    if (foundUser) {
      res.send({ error: "The user has been existing" });
      return;
    }

    const createdUser = await database.addUser(user);

    if (!createdUser) {
      res.send({ error: "Create user error" });
      return;
    }

    req.session.userId = user.id;
    res.send({
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
      res.send({ error: "Authentication error" });
      return;
    }

    const { previousEmail, updatedEmail, updatedPassword } = user;
    const updatedUser = await database.updateUserWithEmail({ previousEmail, updatedEmail, updatedPassword });

    if (!updatedUser) {
      res.send({ error: "Update error" });
      return;
    }

    res.send({
      success: "User updated",
      user: { id: updatedUser.id, email: updatedUser.email }
    });

  });

  // Delete a user
  router.delete('/', async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      res.send({ error: "Not logged in" });
      return;
    }

    const user = req.body;
    const foundUser = await database.getUserWithEmail(user.email);

    if (!foundUser) {
      res.send({ error: "The user has not been existing" });
      return;
    }

    const deletedUser = await database.deleteUserWithEmail(user.email);

    if (!deletedUser) {
      res.send({ error: "Delete error" });
      return;
    }

    res.send({
      success: "User deleted",
      user: { id: deletedUser.id, email: deletedUser.email }
    });
  });

  // Login
  router.post('/login', async (req, res) => {
    const user = req.body;
    const authenticatedUser = await authenticateUser(user.email, user.password, database);
    if (!authenticatedUser) {
      res.send({ error: "Login error" });
      return;
    }

    req.session.userId = user.id;
    res.send({
      success: "Logged in",
      user: { id: user.id , email: user.email}
    });
  });

  // Logout
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({ success: "Logged out" });
  });


  return router;
};
