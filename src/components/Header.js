import { useDispatch } from "react-redux";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import popcorn from "../assets/popcorn32.png";
import { deleteSearchData } from "../store/search";
import MenuBtn from "./MenuBtn";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { logOutUser } from "../store/user";

const Header = ({ isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let type = location.pathname.split("/");
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const deletedSearchData = { results: [{ name: "" }], page: 0 };

  const navigateProfileHandler = () => {
    navigate("/profile");
  };

  const logOutHandler = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  if (!isMobile)
    return (
      <>
        <Box
          as="header"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px={{ base: "10px", md: "20px", lg: "30px" }}
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
              alignItems={"center"}
              flexDirection="row"
              w="117px"
            >
              <Image src={popcorn} objectFit="cover" />
              <Heading fontSize="26px" pl="10px">
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
          </Box>
        </Box>
      </>
    );

  if (isMobile)
    return (
      <>
        <Box
          as="header"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px={{ base: "10px", md: "20px", lg: "30px" }}
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
              alignItems={"center"}
              flexDirection="row"
              w="117px"
            >
              <Image src={popcorn} objectFit="cover" />
              <Heading fontSize="26px" pl="10px">
                TMDB
              </Heading>
            </Link>
          </Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  isActive={isOpen}
                  aria-label="Options"
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  colorScheme="blackAlpha"
                  color="#fdf0d5"
                />
                <MenuList
                  bgGradient="linear(to-b, #c1121f, #780000)"
                  border="none"
                  zIndex={2}
                >
                  <MenuItem
                    _hover={{ bgColor: "#780000" }}
                    _active={{ bgColor: "#780000" }}
                    _focus={{ bgColor: "#780000" }}
                    fontWeight="semibold"
                    onClick={() => {
                      dispatch(deleteSearchData(deletedSearchData));
                      navigate("search/movie");
                    }}
                  >
                    Movies
                  </MenuItem>
                  <MenuItem
                    _hover={{ bgColor: "#780000" }}
                    _active={{ bgColor: "#780000" }}
                    _focus={{ bgColor: "#780000" }}
                    fontWeight="semibold"
                    onClick={() => {
                      dispatch(deleteSearchData(deletedSearchData));
                      navigate("search/tv");
                    }}
                  >
                    Tv Shows
                  </MenuItem>
                  <MenuItem
                    _hover={{ bgColor: "#780000" }}
                    _active={{ bgColor: "#780000" }}
                    _focus={{ bgColor: "#780000" }}
                    fontWeight="semibold"
                    onClick={() => {
                      dispatch(deleteSearchData(deletedSearchData));
                      navigate("/users");
                    }}
                  >
                    Users
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    _hover={{ bgColor: "#780000" }}
                    _active={{ bgColor: "#780000" }}
                    _focus={{ bgColor: "#780000" }}
                  >
                    {user !== null ? (
                      <Text w="100%" onClick={navigateProfileHandler}>
                        Profile
                      </Text>
                    ) : (
                      <ModalLogin />
                    )}
                  </MenuItem>
                  <MenuItem
                    _hover={{ bgColor: "#780000" }}
                    _active={{ bgColor: "#780000" }}
                    _focus={{ bgColor: "#780000" }}
                  >
                    {user !== null ? (
                      <Text w="100%" onClick={logOutHandler}>
                        Log Out
                      </Text>
                    ) : (
                      <ModalRegister />
                    )}
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </>
    );
};

export default Header;
