import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Card from "./Card";
import { Box, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Display = (props) => {
  const movies = useSelector((state) => state.movies);
  const tv = useSelector((state) => state.tvSeries);
  const location = useLocation();
  let { type } = useParams();
  console.log("🚀 ~ file: Display.js ~ line 13 ~ Display ~ type", type);

  if (type === undefined) type = "movie";
  useEffect(() => {
    console.log("Se ejecuto el useEffect de Display");
    console.log("🚀 ~ file: Display.js ~ line 23 ~ Display ~ type", type);
  }, [location]);

  if (props?.searchedList?.length > 0) {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p="10px"
        mx="50px"
      >
        {props.searchedList.map((item) => (
          <Link as={RouterLink} to={`/search/${type}/${item.id}`} key={item.id}>
            <Card {...item} />
          </Link>
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
      >
        {props?.movieList?.map((item) => (
          <Link as={RouterLink} to={`/search/${type}/${item.id}`} key={item.id}>
            <Card {...item} />
          </Link>
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
      >
        {props?.tvList?.map((item) => (
          <Link as={RouterLink} to={`/search/${type}/${item.id}`} key={item.id}>
            <Card {...item} />
          </Link>
        ))}
      </Box>
    );
  }
};

export default Display;
