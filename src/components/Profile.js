import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import { Box, Heading, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { userMovies } from "../utils/getUserMovies";
import AddedButton from "../commons/AddedButton";
import { userTvs } from "../utils/getUserTvs";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);

  useEffect(() => {
    const getUserFavs = async () => {
      const userMovieFavs = await userMovies(user.id);
      await setMovies(userMovieFavs);
      const userTvFavs = await userTvs(user.id);
      await setTvs(userTvFavs);
    };
    getUserFavs();
  }, []);

  return (
    <Box
      w="80%"
      my="40px"
      mx="auto"
      p={4}
      bgColor="#fdf0d5"
      borderRadius="md"
      color="#003049"
    >
      <Heading>Hi {user.name}!</Heading>
      <Box mt={8} mb={4} p={4} bgColor="whiteAlpha.800" borderRadius="md">
        <Heading fontSize={"xl"} m={4}>
          Favorite Movies:
        </Heading>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          my={4}
        >
          {movies.length &&
            movies.map((movie) => (
              <Box key={movie.movieId}>
                <Box
                  position="relative"
                  m="0px"
                  left="180px"
                  top="70px"
                  w="30px"
                  h="30px"
                  zIndex="1"
                >
                  <AddedButton
                    id={movie.movieId}
                    type="movie"
                    setMovies={setMovies}
                  />
                </Box>
                <Link to={`/search/movie/${movie.movieId}`}>
                  <Card {...movie} />
                </Link>
              </Box>
            ))}
        </Box>
      </Box>
      <Box mt={8} mb={4} p={4} bgColor="whiteAlpha.800" borderRadius="md">
        <Heading fontSize={"xl"} m={4}>
          Favorite Tv Series:
        </Heading>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          my={4}
        >
          {tvs.length &&
            tvs.map((tv) => (
              <Box key={tv.tvId}>
                <Box
                  position="relative"
                  m="0px"
                  left="180px"
                  top="70px"
                  w="30px"
                  h="30px"
                  zIndex="1"
                >
                  <AddedButton id={tv.tvId} type="tv" setTvs={setTvs} />
                </Box>
                <Link to={`/search/tv/${tv.tvId}`}>
                  <Card {...tv} />
                </Link>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
