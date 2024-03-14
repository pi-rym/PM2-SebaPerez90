const express = require("express");
const router  = require("./routes/index");
const dogsRouter = require('./routes/dogsRoute')

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.use('/birds', router)

app.use('/dogs',dogsRouter)

module.exports = app;
