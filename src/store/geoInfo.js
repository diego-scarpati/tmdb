import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import getGeoInfo from "../utils/getGeoInfo";

export const setGeoInfo = createAsyncThunk(
  "SET_GEO_INFO",
  async (data, thunkAPI) => {
    try {
      const geoInfo = getGeoInfo();
      return geoInfo;
    } catch (error) {
      console.log(error);
    }
  }
);

export const geoInfoReducer = createReducer(
  {},
  {
    [setGeoInfo.fulfilled]: (state, action) => action.payload,
    [setGeoInfo.rejected]: (state, action) =>
      console.log("SET_GEO_INFO rejected"),
  }
);
