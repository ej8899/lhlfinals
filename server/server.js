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

//------------------------------------
const cors = require("cors");
app.use(cors());
//------------------------------------

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usersDatabase = require('./db/queries/q_user');
const usersRoutes = require('./routes/users-api');
const profilesDatabase = require('./db/queries/q_profiles');
const profilesRoutes = require('./routes/profiles-api');
const resourcesRoutes = require('./routes/resources-api');
const categoriesRoutes = require('./routes/categories-api');
const ratingsRoutes = require('./routes/ratings-api');
const commentsRoutes = require('./routes/comments-api');
const rankingsRoutes = require('./routes/rankings-api');
const rankingsDatabase = require('./db/queries/q_rankings');
const likesRoutes = require('./routes/likes-api');
const likesDatabase = require('./db/queries/q_likes');

// /user/endpoints
const usersRouter = express.Router();
usersRoutes(usersRouter, usersDatabase);
app.use('/api/user', usersRouter);

// /profiles/endpoints
const profilesRouter = express.Router();
profilesRoutes(profilesRouter, profilesDatabase);
app.use('/api/profiles', profilesRouter);

// /rankings/endpoints
const rankingsRouter = express.Router();
rankingsRoutes(rankingsRouter, rankingsDatabase);
app.use('/api/rankings', rankingsRouter);

// /likes/endpoints
const likesRouter = express.Router();
likesRoutes(likesRouter, likesDatabase);
app.use('/api/likes', likesRouter);

app.use('/api/resources',resourcesRoutes);
app.use('/api/categories',categoriesRoutes);
app.use('/api/ratings',ratingsRoutes);
app.use('/api/comments',commentsRoutes);

app.use(express.static(publicPath));
app.get("/*", function (req, res) {
res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 8080,()=>{
  console.log ("Server running");
});
