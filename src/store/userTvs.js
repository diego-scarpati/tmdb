import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { userTvs } from "../utils/getUserTvs";

export const getUserTvs = createAsyncThunk(
  "GET_USER_TVS",
  async (data, thunkAPI) => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    try {
      if (localUser !== null) {
        const userTvFavs = await userTvs(localUser.id);
        const tvsId = userTvFavs.map((tv) => tv.tvId);
        return tvsId;
      } else {
        return [];
      }
    } catch (error) {
      console.log("GET_USER_TVS error", error);
    }
  }
);

export const userTvsReducer = createReducer([], {
  [getUserTvs.fulfilled]: (state, action) => action.payload,
  [getUserTvs.rejected]: (state, action) =>
    console.log("GET_USER_TVS rejected"),
});
