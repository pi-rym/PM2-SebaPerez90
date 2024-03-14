const {Router} = require("express");
const indexController = require("../controllers/indexController");

const router = Router();

// define the home page route
router.get("/", indexController);

// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
