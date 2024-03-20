const mongoose = require("mongoose");
const { set } = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const conectionDB = async () => {
  set("strictQuery", true);
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("conected to the data base"))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = conectionDB;
