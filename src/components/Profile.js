import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../commons/Card";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const allMovies = async () => {
      try {
        const allUserMovies = await axios.get(
          `http://localhost:3002/api/movies/allUserMovies?id=${user.id}`
        );
        setMovies(allUserMovies.data);
      } catch (error) {
        console.log(error);
      }
    };
    allMovies();
  }, []);

  return (
    <Box
      w="80%"
      my="40px"
      mx="auto"
      p={4}
      bgColor="whiteAlpha.800"
      borderRadius="md"
      color="#003049"
    >
      <Heading>Hi {user.name}!</Heading>
      <Box>
        <h2>Favorite Movies: </h2>
      </Box>
      <Box>
        <h2>Favorite Tv Series: </h2>
      </Box>
    </Box>
  );
};

export default Profile;
