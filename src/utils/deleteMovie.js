import axios from "axios";

export const removeMovie = async (data) => {
  const { type, id, movie } = data;
  try {
    const removedMovies = await axios.put(
      `http://localhost:3002/api/movies/removeMovie?id=${id}&movie=${movie}`,
      data
    );
    return removedMovies;
  } catch (error) {
    console.log(error);
  }
};
