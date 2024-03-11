const transformDataToElement = require("./renderCards");
const tempData = require("./tempData");

console.log(tempData);


$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
  transformDataToElement(data);
});
