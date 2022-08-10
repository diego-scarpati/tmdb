import { createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import { addMovie } from "../utils/addMovie";

export const addMovieFavorites = createAsyncThunk("ADD_MOVIE_FAVORITES", (data, thunkAPI) => {
  try {
    const addedMovie = addMovie(data)
    return addedMovie
  } catch (error) {
    console.log(error)
  }
})

export const addMovieReducer = createReducer({}, {
  [addMovieFavorites.fulfilled]: (state, action) => action.payload,
  [addMovieFavorites.rejected]: (state, action) => console.log("ADD_MOVIE_FAVORITES rejected"),
});