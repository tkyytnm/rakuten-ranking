const express = require("express");
const app = express();
const loaders = require("./src/loaders");
const routes = require("./src/routes");

loaders(app);
routes(app);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
