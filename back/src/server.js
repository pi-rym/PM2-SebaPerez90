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
app.use("/", moviesRouter);


//!!! THIS IS ONLY AA EXAMPLE TO CHECK THE CONECTIONS ARE RIGHT
app.use("/example", exampleRoute);

module.exports = app;
