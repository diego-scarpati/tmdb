import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import getTv from "../utils/getTv";

export const setTv = createAsyncThunk("GET_TV_TMDB", async (data, thunkAPI) => {
  try {
    const tvSeries = getTv();
    return tvSeries;
  } catch (error) {
    console.log(error);
  }
});

export const tvSeriesReducer = createReducer(
  {},
  {
    [setTv.fulfilled]: (state, action) => action.payload,
    [setTv.rejected]: (state, action) => console.log("SET_USER rejected"),
  }
);
