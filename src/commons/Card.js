import noImg from "../assets/noImg.jpeg";
import popcornCard from "../assets/popcornCard.jpeg";
import {
  Box,
  Heading,
  Image,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
// TbHeartPlus

const Card = ({
  poster_path,
  name,
  title,
  release_date,
  vote_average,
  first_air_date,
}) => {
  const path = "https://image.tmdb.org/t/p/w342";

  let voteColor = "green.400";
  if (vote_average < 6.5) voteColor = "yellow.400";
  if (vote_average < 4) voteColor = "red.400";
  let cardName = title ? title : name;

  return (
    <Box
      w="230px"
      h="360px"
      // border="1px"
      // borderColor="#fdf0d5"
      borderRadius="20px"
      mx="10px"
      my="15px"
      p="10px"
      alignItems="center"
      display="flex"
      flexDirection="column"
      boxShadow="xl"
      bgImage={popcornCard}
      bgPosition="center"
      bgSize="cover"
      overflow="hidden"
      // _hover={{ textDecoration: "none" }}
    >
      {poster_path ? (
        <Image
          src={`${path}${poster_path}`}
          alt={name}
          objectFit="cover"
          w="185px"
          minH="278px"
          border="1px"
          borderColor="gray.200"
          borderRadius="20px"
          my="5px"
        />
      ) : (
        <Image
          src={noImg}
          alt={name}
          objectFit="cover"
          w="185px"
          minH="278px"
          border="1px"
          borderColor="gray.200"
          borderRadius="20px"
          my="5px"
        />
      )}
      {/* <Box bgColor="#c1121f" boxShadow="inner" color="#fdf0d5" > */}
      <Box
        boxShadow="inner"
        color="#fdf0d5"
        bgGradient="linear(to-b, #c1121f, #780000)"
      >
        <Heading
          size="sm"
          noOfLines={1}
          minH="24px"
          w="230px"
          pt="5px"
          textAlign="center"
        >
          {cardName}
        </Heading>
        <Text
          fontWeight="medium"
          w="230px"
          textAlign="center"
          pt="5px"
          pb="15px"
        >
          {release_date ? release_date : first_air_date}
        </Text>
      </Box>
      <CircularProgress
        value={vote_average * 10}
        color={voteColor}
        size="40px"
        display="unset"
        position="relative"
        bottom="344px"
        right="65px"
        bgColor="white"
        borderRadius="full"
        border="0px"
      >
        <CircularProgressLabel fontWeight="bold">
          {vote_average.toFixed(1)}
        </CircularProgressLabel>
      </CircularProgress>
      <Box position="relative" bottom="384px" left="70px">
      <TbHeartPlus color="#c1121f" size="30px"/>
      {/* bgGradient="linear(to-b, #c1121f, #780000)" */}
      </Box>
    </Box>
  );
};

export default Card;
