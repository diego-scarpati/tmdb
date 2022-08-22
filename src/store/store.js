import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { userReducer } from "./user";
import { moviesReducer } from "./movies";
import { tvSeriesReducer } from "./tv";
import { selectedReducer } from "./selected";
import { geoInfoReducer } from "./geoInfo";
import { providersReducer } from "./providers";
import { searchReducer } from "./search";
import { addMovieReducer } from "./added";
import { userMoviesReducer } from "./userMovies";
import { userTvsReducer } from "./userTvs";

const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvSeries: tvSeriesReducer,
    selected: selectedReducer,
    geoInfo: geoInfoReducer,
    providers: providersReducer,
    search: searchReducer,
    addMovie: addMovieReducer,
    userMovies: userMoviesReducer,
    userTvs: userTvsReducer,
  },
});

export default store;
