import axios from "axios";

const getMovies = async () => {
  try {
    const axiosMovies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
      }
    );
    return axiosMovies.data;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getMovies;