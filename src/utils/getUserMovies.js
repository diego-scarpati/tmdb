import axios from "axios";

export const userMovies = async (id) => {
  try {
    const allUserMovies = await axios.get(
      `http://localhost:3002/api/movies/allUserMovies?id=${id}`
    );
    return allUserMovies.data
  } catch (error) {
    console.log(error);
  }
};
