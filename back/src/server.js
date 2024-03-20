const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const route = require("./routes/index");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("you past through the middleware 💩");
  next();
});

app.use(route);

module.exports = app;
