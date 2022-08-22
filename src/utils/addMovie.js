import axios from "axios";

export const addMovie = async (data) => {
  try {
    const addedMovie = await axios.post(
      "http://localhost:3002/api/movies/addMovie",
      data
    );
    return addedMovie;
  } catch (error) {
    console.log(error);
  }
};
