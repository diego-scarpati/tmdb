import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import getSelected from "../utils/getSelected";

export const setSelected = createAsyncThunk(
  "GET_SELECTED_TMDB",
  async (data, thunkAPI) => {
    console.log("redux data", data)
    const { type, id } = data;
    try {
      const selected = getSelected(type, id);
      return selected;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectedReducer = createReducer(
  {},
  {
    [setSelected.fulfilled]: (state, action) => action.payload,
    [setSelected.rejected]: (state, action) =>
      console.log("GET_SELECTED_TMDB rejected"),
  }
);
