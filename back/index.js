const app = require("./src/server");
const conectionDB = require("./src/config/conectionDB");

const PORT = 3000;

conectionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port  ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
