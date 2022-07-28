import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import  getMovies from "../utils/getMovies"

export const setMovies = createAsyncThunk("GET_MOVIES_TMDB", async (data, thunkAPI) => {
  try {
    const movies = getMovies()
    return movies
  } catch (error) {
    console.log(error);
  }
});

export const moviesReducer = createReducer(
  {},
  {
    [setMovies.fulfilled]: (state, action) => action.payload,
    [setMovies.rejected]: (state, action) => console.log("SET_USER rejected"),
  }
);
