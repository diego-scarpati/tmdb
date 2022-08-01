import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import getProviders from "../utils/getProviders";

export const setProviders = createAsyncThunk(
  "SET_PROVIDERS",
  async (data, thunkAPI) => {
    console.log("redux data", data);
    const { type, id } = data;
    try {
      const providers = getProviders(type, id);
      return providers;
    } catch (error) {
      console.log(error);
    }
  }
);

export const providersReducer = createReducer(
  { AR: { flatrate: ["", ""] } },
  {
    [setProviders.fulfilled]: (state, action) => action.payload,
    [setProviders.rejected]: (state, action) =>
      console.log("SET_PROVIDERS rejected"),
  }
);
