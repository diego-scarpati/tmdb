import React from "react";
import { useParams } from "react-router";
import { Link as RouterLink} from "react-router-dom";
import Card from "./Card";
import { Box, Link } from "@chakra-ui/react";

const Display = (props) => {
  let { type } = useParams() || "movie"
  console.log("props: ", props);
  if (!type) type = "movie";
  let displayList = props[type + "List"];
  return props?.searchedList?.length > 0 ? (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      p="10px"
      mx="50px"
      // bgColor="#fdf0d5"
    >
      {props.searchedList.map((item) => (
        <Link as={RouterLink} to={`/search/${type}/${item.id}`} key={item.id}>
          <Card {...item} />
        </Link>
      ))}
    </Box>
  ) : (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      p="10px"
      mx="50px"
    >
      {displayList.map((item) => (
        <Link as={RouterLink} to={`/search/${type}/${item.id}`} key={item.id}>
          <Card {...item} />
        </Link>
      ))}
    </Box>
  );
};

export default Display;
