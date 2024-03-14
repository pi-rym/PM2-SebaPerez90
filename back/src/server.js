const express = require("express");

//MIDDLEWARES
const morgan = require("morgan");
const cors = require("cors");

//ROUTES
const moviesRouter = require("./routes/moviesRouter");
const exampleRoute = require("./routes/exampleRoute");

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

//THIS MIDDLEWARE RUN BEFORE EACH REQUEST
app.use((req, res, next) => {
  console.log("I´M A FUCKING MIDDLEWARE 👻");
  next();
});

//ASSIGN THE ROUTES PATH
// app.get("/", (req, res) => {
//   res.send("home page");
// });

app.use("/", moviesRouter);

app.use("/example", exampleRoute);

module.exports = app;
