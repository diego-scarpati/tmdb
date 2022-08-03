import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../commons/Card";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user)

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
      <Heading>
        Hi {user.name}!
      </Heading>
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
