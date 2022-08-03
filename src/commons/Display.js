import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Card from "./Card";
import { Box, Link } from "@chakra-ui/react";
import { setSelected } from "../store/selected";

const Display = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const tv = useSelector((state) => state.tvSeries);
  const search = useSelector(state => state.search)
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
        my="20px"
      >
        {props?.movieList?.map((item) => (
          <Link
            as={RouterLink}
            to={`/search/${type}/${item.id}`}
            key={item.id}
          >
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
        my="20px"
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
