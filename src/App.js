import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./commons/SearchBar";
import Header from "./components/Header";
import Display from "./commons/Display";
import NotFound from "./commons/NotFound";
import Overview from "./components/Overview";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Users from "./components/Users";
import getMovies from "./utils/getMovies";
import getTv from "./utils/getTv";
import { Box } from "@chakra-ui/react";
import { setMovies } from "./store/movies";
import { setTv } from "./store/tv";
import { setGeoInfo } from "./store/geoInfo";
import "./index.css";

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const dispatch = useDispatch();

  console.log(".env", process.env.TMDB_API_KEY)

  useEffect(() => {
    const getData = async () => {
      const movies = await getMovies();
      const tv = await getTv();
      await setMovieList(movies?.results);
      await setTvList(tv?.results);
      dispatch(setMovies());
      dispatch(setTv());
      dispatch(setGeoInfo())
    };
    getData();
  }, []);

  return (
    <React.StrictMode>
      <Box minH="700px" id="body">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <Display
                  movieList={movieList}
                  tvList={tvList}
                />
              </>
            }
          />
          <Route
            path="search/:type"
            element={
              <>
                <SearchBar />
                <Display
                  movieList={movieList}
                  tvList={tvList}
                />
              </>
            }
          />
          <Route path="search/:type/:id/*" element={<Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </Box>
    </React.StrictMode>
  );
};

export default App;
