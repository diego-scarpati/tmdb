import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { userMovies } from "../utils/getUserMovies";

export const getUserMovies = createAsyncThunk(
  "GET_USER_MOVIES",
  async (data, thunkAPI) => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    try {
      if (localUser !== null) {
        const userMovieFavs = await userMovies(localUser.id);
        const moviesId = userMovieFavs.map((movie) => movie.movieId);
        return moviesId;
      } else {
        return [];
      }
    } catch (error) {
      console.log("GET_USER_MOVIES error", error);
    }
  }
);

export const userMoviesReducer = createReducer([], {
  [getUserMovies.fulfilled]: (state, action) => action.payload,
  [getUserMovies.rejected]: (state, action) =>
    console.log("GET_USER_MOVIES rejected"),
});
