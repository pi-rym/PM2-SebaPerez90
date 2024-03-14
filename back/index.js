const app = require("./src/server");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on port  ${PORT}`);
});
