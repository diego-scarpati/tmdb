import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAsyncThunk("SET_USER", () => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  try {
    if (localUser !== null) {
      return localUser;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
});

export const logInRequest = createAsyncThunk(
  "LOG_IN_REQUEST",
  async (data, thunkAPI) => {
    const { username, password } = data;
    try {
      const user = await axios.post("http://localhost:3002/api/auth/login", {
        username,
        password,
      });
      const userData = user.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      if (error.response.status === 404) console.log("aca deberia ir el toast")
      console.log(error);
    }
  }
);

export const logOutUser = createAsyncThunk("LOG_OUT_REQUEST", () => {
  const localUser = localStorage.removeItem("user");
  return null;
});

export const userReducer = createReducer(null, {
  [setUser.fulfilled]: (state, action) => action.payload,
  [setUser.rejected]: (state, action) => console.log("SET_USER rejected"),

  [logInRequest.fulfilled]: (state, action) => action.payload,
  [logInRequest.rejected]: (state, action) =>
    console.log("LOG_IN_REQUEST rejected"),

  [logOutUser.fulfilled]: (state, action) => action.payload,
  [logOutUser.rejected]: (state, action) =>
    console.log("LOG_OUT_REQUEST rejected"),
});
