const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "learnthis/build");

app.use(express.static(publicPath));
app.get("/*", function (req, res) {
res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(process.env.PORT || 7070);