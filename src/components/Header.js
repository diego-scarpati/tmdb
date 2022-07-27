import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Box, Heading, Image, Link } from "@chakra-ui/react";
import popcorn from "../assets/popcorn32.png";

const Header = () => {
  const [, setUserLS] = useLocalStorage("user", "");
  // const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.post("http://localhost:3001/api/logout");
      // setUser({});
      setUserLS("");
      window.localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log("Logout error: ", error);
    }
  };

  // useEffect(()=>{
  //   setUser(getUser())
  // }, [])

  // --darkRed: #780000;
  // --red: #c1121f;
  // --beige: #fdf0d5;
  // --darkBlue: #003049;
  // --lightBlue: #669bbc;

  // const userLS = window.localStorage.getItem("user");
  // console.log("userLS: ", userLS);
  // console.log("typeof userLS: ", typeof userLS);
  // console.log("User desde Header:", user.favorites)

  return (
    <>
      <Box
        as="header"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
        boxShadow="lg"
        w="100%"
        h="70px"
        // bgColor="#c1121f"
        color="#fdf0d5"
        textDecoration="none"
        textDecorationLine="none"
        bgGradient="linear(to-b, #c1121f, #780000)"
        // bgImage={}
      >
        <Box w="25%">
          <Link as={RouterLink} to="/" display="flex" flexDirection="row" w="117px">
            <Image src={popcorn} objectFit="cover" />
            <Heading size="lg" fontSize="26px" pl="10px">
              TMDB
            </Heading>
          </Link>
        </Box>
        <Box
          w="40%"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Link as={RouterLink} to="search/movie">
            <Heading size="lg" fontSize="26px">
              Movies
            </Heading>
          </Link>
          <Link as={RouterLink} to="search/tv">
            <Heading size="lg" fontSize="26px">
              TV Shows
            </Heading>
          </Link>
          <Link as={RouterLink} to="/users">
            <Heading size="lg" fontSize="26px">
              Users
            </Heading>
          </Link>
        </Box>
        <Box
          w="25%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Link as={RouterLink} to="/login">
            <Heading size="lg" fontSize="26px" pl="15px">
              Log In
            </Heading>
          </Link>
          <Link as={RouterLink} to="/register">
            <Heading size="lg" fontSize="26px" px="15px">
              Register
            </Heading>
          </Link>
        </Box>

        {/* <div>
        {userLS === null && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {userLS && (
          <>
            <Link to="/profile">
              <h3>{`${user.name}${user.lastName}`}</h3>
            </Link>
            <div onClick={logoutHandler}>
              <p>Logout</p>
            </div>
          </>
        )}
      </div> */}
      </Box>
    </>
  );
};

export default Header;
