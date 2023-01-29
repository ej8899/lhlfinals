require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "learnthis/build");

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET_KEY]
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userDatabase = require('./db/userDatabase');
const userRoutes = require('./routes/userRoutes');

// /user/endpoints
const userRouter = express.Router();
userRoutes(userRouter, userDatabase);
app.use('/api/user', userRouter);

app.use(express.static(publicPath));
app.get("/*", function (req, res) {
res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(process.env.PORT || 7070);
