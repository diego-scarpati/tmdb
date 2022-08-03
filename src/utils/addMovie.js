import axios from "axios";

export const addMovie = async (data) => {
  try {
    const addedMovie = await axios.post("http://localhost:3002/api/movies/addMovie", data)
    console.log("🚀 ~ file: addMovie.js ~ line 6 ~ addMovie ~ addedMovie", addedMovie)
    return addedMovie.data
  } catch (error) {
    console.log(error)
  }
}