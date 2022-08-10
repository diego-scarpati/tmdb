import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Card from "../commons/Card";
import { Box, Link } from "@chakra-ui/react";
import { setSelected } from "../store/selected";
import AddButton from "../commons/AddButton";

const Display = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const tv = useSelector((state) => state.tvSeries);
  const search = useSelector((state) => state.search);
  const location = useLocation();
  let { type } = useParams();

  if (type === undefined) type = "movie";

  // useEffect(() => {
  //   console.log("Se ejecuto el useEffect de Display");
  //   console.log("🚀 ~ file: Display.js ~ line 23 ~ Display ~ type", type);
  // }, [location]);

  if (search.results.length > 1) {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p="10px"
        mx="50px"
        my="20px"
      >
        {search.results.map((item) => (
          <Box key={item.id} _hover={{ transform: "scale(1.05)" }}>
            <Box
              position="relative"
              m="0px"
              left="180px"
              top="70px"
              w="30px"
              h="30px"
              zIndex="1"
            >
              <AddButton id={item.id} type={type} />
            </Box>
            <Link as={RouterLink} to={`/search/${type}/${item.id}`}>
              <Card {...item} />
            </Link>
          </Box>
        ))}
      </Box>
    );
  }

  if (type === undefined || type === "movie") {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p="10px"
        mx="50px"
        my="20px"
      >
        {props?.movieList?.map((item) => (
          <Box key={item.id} _hover={{ transform: "scale(1.05)" }}>
            <Box
              position="relative"
              m="0px"
              left="180px"
              top="70px"
              w="30px"
              h="30px"
              zIndex="1"
            >
              <AddButton id={item.id} type={type} />
            </Box>
            <Link as={RouterLink} to={`/search/${type}/${item.id}`}>
              <Card {...item} />
            </Link>
          </Box>
        ))}
      </Box>
    );
  }

  if (type === "tv") {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p="10px"
        mx="50px"
        my="20px"
      >
        {props?.tvList?.map((item) => (
          <Box key={item.id} _hover={{ transform: "scale(1.05)" }}>
            <Box
              position="relative"
              m="0px"
              left="180px"
              top="70px"
              w="30px"
              h="30px"
              zIndex="1"
              
            >
              <AddButton id={item.id} type={type} />
            </Box>
            <Link as={RouterLink} to={`/search/${type}/${item.id}`}>
              <Card {...item} />
            </Link>
          </Box>
        ))}
      </Box>
    );
  }
};

export default Display;
