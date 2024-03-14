const getMovies = async () => {
  const resp = await fetch("https://students-api.up.railway.app/movies");
  try {
    if (resp === 200) {
      console.log("the request to the DB has been successfully");
      const data = await resp.json();

      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = getMovies;
