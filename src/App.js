import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import SearchBar from "./commons/SearchBar";
import Header from "./components/Header";
import Display from "./components/Display";
import NotFound from "./commons/NotFound";
import Overview from "./components/Overview";
import Profile from "./components/Profile";
import Users from "./components/Users";
import getMovies from "./utils/getMovies";
import getTv from "./utils/getTv";
import { Box } from "@chakra-ui/react";
import { setMovies } from "./store/movies";
import { setTv } from "./store/tv";
import { setGeoInfo } from "./store/geoInfo";
import "./index.css";
import { setUser } from "./store/user";
import { getUserMovies } from "./store/userMovies";
import { getUserTvs } from "./store/userTvs";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const movies = await getMovies();
      const tv = await getTv();
      await setMovieList(movies?.results);
      await setTvList(tv?.results);
      dispatch(setUser());
      dispatch(setMovies());
      dispatch(setTv());
      dispatch(setGeoInfo());
      dispatch(getUserMovies());
      dispatch(getUserTvs());
    };
    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });

    return () => {
      window.removeEventListener(
        "resize",
        setIsMobile(window.innerWidth < 768)
      );
    };
  }, [isMobile]);

  return (
    <React.StrictMode>
      <Box minH="700px" id="body">
        <Header isMobile={isMobile} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <Display movieList={movieList} tvList={tvList} />
              </>
            }
          />
          <Route
            path="search/:type"
            element={
              <>
                <SearchBar />
                <Display movieList={movieList} tvList={tvList} />
              </>
            }
          />
          <Route
            path="search/:type/:id/*"
            element={<Overview isMobile={isMobile} />}
          />
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
