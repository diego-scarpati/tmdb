import axios from "axios";

export const addMovie = async (data) => {
  console.log("🚀 ~ file: addMovie.js ~ line 4 ~ addMovie ~ data", data);

  try {
    const addedMovie = await axios.post("http://localhost:3002/api/movies/addMovie", data)
    console.log(
      "🚀 ~ file: addMovie.js ~ line 6 ~ addMovie ~ addedMovie",
      addedMovie
    );
    return addedMovie.data;
  } catch (error) {
    console.log(error)
    // if (error.response) {
    //   console.log("error.response.data", error.response.data);
    //   console.log("error.response.status", error.response.status);
    //   console.log("error.response.headers", error.response.headers);
    // } else if (error.request) {
    //   console.log("error.response.request", error.request);
    // } else {
    //   console.log('error.message', error.message);
    // }
    // console.log("error.config", error.config);
  }
};
