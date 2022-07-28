import React, { useState, useEffect, useContext } from "react";
import popcornCardH from "../assets/popcornCardH.jpeg";
import { useParams } from "react-router";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { TbHeartPlus } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { useSelector } from "react-redux";

const Overview = () => {
  const { type, id } = useParams();
  const [overviewInfo, setOverviewInfo] = useState({});
  console.log(
    "🚀 ~ file: Overview.js ~ line 16 ~ Overview ~ overviewInfo",
    overviewInfo
  );
  const selected = useSelector(state => state.selected)
  const navigate = useNavigate();

  let voteColor = "green.400";
  if (selected.vote_average < 6.5) voteColor = "yellow.400";
  if (selected.vote_average < 4) voteColor = "red.400";
  let cardName = selected.title ? selected.title : selected.name;

  // axios
  //   .get(`https://api.themoviedb.org/3/${type}/${id}`, {
  //     params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
  //   })
  //   .then((result) => result.data)
  //   .then((data) => {
  //     console.log("🚀 ~ file: Overview.js ~ line 30 ~ .then ~ data", data);
  //     setOverviewInfo(data);
  //   })
  //   .catch((error) => console.log("Axios error: ", error));

  useEffect(() => {
    // const getInfo = async () => {
    //   try {
    //     const info = await axios.get(
    //       `https://api.themoviedb.org/3/${type}/${id}`,
    //       {
    //         params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
    //       }
    //     );
    //     return info.data;
    //   } catch (error) {
    //     console.log("getInfo Error:", error);
    //   }
    //   await setOverviewInfo(getInfo())
    // };
  }, []);

  const addFavoritesHandler = async () => {
    // try {
    //   type === "movie"
    //     ? await axios.put("http://localhost:3001/api/addMovie", {
    //         // user: user,
    //         info: overviewInfo,
    //       })
    //     : await axios.put("http://localhost:3001/api/addTv", {
    //         // user: user,
    //         info: overviewInfo,
    //       });
    //   await navigate("/");
    // } catch (error) {
    //   console.log("Add to Favorites error: ", error);
    // }
  };

  const path = "https://image.tmdb.org/t/p";

  return type === "movie" ? (
    <>
      <Box
        mx="10%"
        mt="70px"
        p="30px"
        borderRadius="20px"
        border="1px"
        overflow="hidden"
        display="flex"
        bgColor="white"
        minH="450px"
        justifyContent="space-between"
        bgImage={popcornCardH}
        bgSize="cover"
        objectFit="fill"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box w="300px" h="450px" filter="auto" blur="none">
          <Image
            src={`${path}/w342${selected.poster_path}`}
            alt={cardName}
            borderRadius="20px"
          />
        </Box>
        <Box w="70%" borderRadius="20px" p="16px" bgColor="whiteAlpha.700">
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <CircularProgress
                value={selected.vote_average * 10}
                color={voteColor}
                size="50px"
                bgColor="white"
                borderRadius="full"
                m="5px"
                mr="10px"
              >
                <CircularProgressLabel fontWeight="bold">
                  {selected.vote_average?.toFixed(1)}
                </CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight="medium">
                Over {selected.vote_count} votes.
              </Text>
            </Box>
            {/* <Box position="relative" bottom="384px" left="70px"> */}
            <Box>
              <TbHeartPlus color="#c1121f" size="40px" m="10px" />
            </Box>
          </Box>
          <Heading as="h2" fontSize="48px">
            {cardName}
          </Heading>
          <Heading as="h4" fontSize="36px" mt="10px">
            Overview:
          </Heading>
          <Box>
            <Text mt="5px" fontWeight="medium">
              {selected.overview}
            </Text>
            <Text mt="5px" fontWeight="medium">
              Realease date: {selected.release_date}
            </Text>
            <Text mt="5px" fontWeight="medium">
              Genres:{selected.genres.map((item) => " " + item.name)}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Box
        mx="10%"
        mt="70px"
        p="30px"
        borderRadius="20px"
        border="1px"
        overflow="hidden"
        display="flex"
        bgColor="white"
        minH="450px"
        justifyContent="space-between"
        bgImage={popcornCardH}
        bgSize="cover"
        objectFit="fill"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box w="300px" h="450px" filter="auto" blur="none">
          <Image
            src={`${path}/w342${selected.poster_path}`}
            alt={cardName}
            borderRadius="20px"
          />
        </Box>
        <Box w="70%" borderRadius="20px" p="16px" bgColor="whiteAlpha.700">
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <CircularProgress
                value={selected.vote_average * 10}
                color={voteColor}
                size="50px"
                bgColor="white"
                borderRadius="full"
                m="5px"
                mr="10px"
              >
                <CircularProgressLabel fontWeight="bold">
                  {selected.vote_average?.toFixed(1)}
                </CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight="medium">
                Over {selected.vote_count} votes.
              </Text>
            </Box>
            <Box>
              <TbHeartPlus color="#c1121f" size="40px" m="10px" />
            </Box>
          </Box>
          <Heading as="h2" fontSize="48px">
            {cardName}
          </Heading>
          <Heading as="h4" fontSize="36px" mt="10px">
            Overview:
          </Heading>
          <Box>
            <Text mt="5px" fontWeight="medium">
              {selected.overview}
            </Text>
            <Text mt="5px" fontWeight="medium">
              Seasons: {selected?.seasons?.length}
            </Text>
            <Text mt="5px" fontWeight="medium">
              Genres:{selected?.genres ? selected?.genres.map((item) => " " + item.name) : ""}
            </Text>
            <Text mt="5px" fontWeight="medium">
              Available:{selected?.networks ? selected?.networks.map((item) => " " + item.name) : ""}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
