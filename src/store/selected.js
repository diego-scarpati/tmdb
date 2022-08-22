import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import getSelected from "../utils/getSelected";

export const setSelected = createAsyncThunk(
  "GET_SELECTED_TMDB",
  async (data, thunkAPI) => {
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
  { genres: [{ name: "" }], networks: [{ name: "" }] },
  {
    [setSelected.fulfilled]: (state, action) => action.payload,
    [setSelected.rejected]: (state, action) =>
      console.log("GET_SELECTED_TMDB rejected"),
  }
);
