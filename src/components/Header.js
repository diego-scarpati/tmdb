import { useDispatch } from "react-redux";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Heading, Image, Link } from "@chakra-ui/react";
import popcorn from "../assets/popcorn32.png";
import { deleteSearchData } from "../store/search";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import MenuBtn from "./MenuBtn";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let type = location.pathname.split("/");
  const dispatch = useDispatch();
  const deletedSearchData = { results: [{ name: "" }], page: 0 };

  // const logoutHandler = async () => {
  //   try {
  //     await axios.post("http://localhost:3001/api/logout");
  //     setUserLS("");
  //     window.localStorage.removeItem("user");
  //     navigate("/");
  //   } catch (error) {
  //     console.log("Logout error: ", error);
  //   }
  // };

  return (
    <>
      <Box
        as="header"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px="30px"
        boxShadow="lg"
        w="100%"
        h="70px"
        color="#fdf0d5"
        textDecoration="none"
        textDecorationLine="none"
        bgGradient="linear(to-b, #c1121f, #780000)"
      >
        <Box w="25%">
          <Link
            as={RouterLink}
            to="/"
            display="flex"
            flexDirection="row"
            w="117px"
          >
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
          <Button
            size="md"
            colorScheme={
              type.indexOf("movie") !== -1 ? "whiteAlpha" : "blackAlpha"
            }
            as="a"
            mx="2px"
            fontSize="20px"
            color="#fdf0d5"
            onClick={() => {
              dispatch(deleteSearchData(deletedSearchData));
              navigate("search/movie");
            }}
          >
            Movies
          </Button>
          <Button
            size="md"
            colorScheme={
              type.indexOf("tv") !== -1 ? "whiteAlpha" : "blackAlpha"
            }
            as="a"
            mx="2px"
            fontSize="20px"
            color="#fdf0d5"
            onClick={() => {
              dispatch(deleteSearchData(deletedSearchData));
              navigate("search/tv");
            }}
          >
            TV Shows
          </Button>
          <Button
            size="md"
            colorScheme={
              type.indexOf("users") !== -1 ? "whiteAlpha" : "blackAlpha"
            }
            as="a"
            mx="2px"
            fontSize="20px"
            color="#fdf0d5"
            onClick={() => {
              dispatch(deleteSearchData(deletedSearchData));
              navigate("/users");
            }}
          >
            Users
          </Button>
        </Box>
        <Box
          w="25%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <MenuBtn />
          {/* <ModalLogin /> */}
          {/* <ModalRegister /> */}
          {/* <Button
            size="md"
            colorScheme={"blackAlpha"}
            as="a"
            fontSize="20px"
            mx="2px"
            color="#fdf0d5"
            onClick={() => navigate("/register")}
          >
            Register
          </Button> */}
        </Box>
      </Box>
    </>
  );
};

export default Header;
