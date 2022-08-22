import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Card from "../commons/Card";
import { Box, Link } from "@chakra-ui/react";
import AddButton from "../commons/AddButton";
import AddedButton from "../commons/AddedButton";

const Display = (props) => {
  const userMovies = useSelector((state) => state.userMovies);
  const userTvs = useSelector((state) => state.userTvs);
  const search = useSelector((state) => state.search);
  let { type } = useParams();

  if (type === undefined) type = "movie";

  if (search.results.length > 1 && type === "movie") {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        // p="10px"
        mx="50px"
        mb="20px"
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
              {userMovies.indexOf(item.id) === -1 ? <AddButton id={item.id} type={type} /> : <AddedButton id={item.id} type={type} />}
            </Box>
            <Link as={RouterLink} to={`/search/${type}/${item.id}`}>
              <Card {...item} />
            </Link>
          </Box>
        ))}
      </Box>
    );
  }

  if (search.results.length > 1 && type === "tv") {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        // p="10px"
        mx="50px"
        mb="20px"
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
              {userTvs.indexOf(item.id) === -1 ? <AddButton id={item.id} type={type} /> : <AddedButton id={item.id} type={type} />}
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
        // p="10px"
        mx="50px"
        mb="20px"
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
              {userMovies.indexOf(item.id) === -1 ? <AddButton id={item.id} type={type} /> : <AddedButton id={item.id} type={type} />}
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
        // p="10px"
        mx="50px"
        mb="20px"
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
              {userTvs.indexOf(item.id) === -1 ? <AddButton id={item.id} type={type} /> : <AddedButton id={item.id} type={type} />}
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
