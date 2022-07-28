import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { userReducer } from "./user";
import { moviesReducer } from "./movies";
import { tvSeriesReducer } from "./tv";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {user: userReducer, movies: moviesReducer, tvSeries: tvSeriesReducer},
});

export default store;
