const transformDataToElement = require("./renderCards");
const tempData = require("./tempData");
const axios = require("axios");

//? IMPORTING DATA MOVIE JSON
// console.log(tempData);

//? GET REQUEST USIN CDN TO THE JQUERY
// $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
//   transformDataToElement(data);
// });

//? GET REQUEST USIN AXIOS LIBRARY
axios
  //!URL PROVIDE FOR HENRY APP
  // .get("https://students-api.up.railway.app/movies")

  //!TESTING OUR BACKEND APP CONECTION
  .get("http://localhost:3000/movies/")

  .then((response) => {
    if (response.status === 200) {
      const data = response.data;

      transformDataToElement(data);
    }
  })

  .catch((error) => {
    console.error(error);
  });
