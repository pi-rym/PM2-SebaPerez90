const getMovies = async () => {
  try {
    const resp = await fetch("https://students-api.up.railway.app/movies");

    if (resp.status === 200) {
      console.log("the request to the DB has been successfully");

      const data = await resp.json();

      return data;
    } else throw new Error('something with the DB goes wrong')
    
  } catch (error) {
    console.error(error);
  }
};


//TEST FUNCTION TO CHECK THE CONECTION
const greeting = () => {
  console.log("hello world");
};

module.exports = { getMovies, greeting };
