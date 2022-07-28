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

const Overview = () => {
  // const { user, setUser } = useContext(UserContext);
  const { type, id } = useParams();
  const [overviewInfo, setOverviewInfo] = useState({});
  const navigate = useNavigate();

  let voteColor = "green.400";
  if (overviewInfo.vote_average < 6.5) voteColor = "yellow.400";
  if (overviewInfo.vote_average < 4) voteColor = "red.400";
  let cardName = overviewInfo.title ? overviewInfo.title : overviewInfo.name;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/${type}/${id}`, {
        params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
      })
      .then((result) => result.data)
      .then((data) => {
        setOverviewInfo(data);
      })
      .catch((error) => console.log("Axios error: ", error));
    axios
      .get(`https://api.themoviedb.org/3/${type}/${id}/watch/providers`)
      .then((res) => console.log("Providers", res.data))
      .catch((error) => console.log(error));
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

  return (
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
        // bgImage={`url('${path}/original${overviewInfo.poster_path}')`}
        bgImage={popcornCardH}
        bgSize="cover"
        objectFit="fill"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box w="300px" h="450px" filter="auto" blur="none">
          <Image
            src={`${path}/w342${overviewInfo.poster_path}`}
            alt={cardName}
            borderRadius="20px"
          />
        </Box>
        <Box w="70%" borderRadius="20px" p="16px" bgColor="whiteAlpha.700">
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <CircularProgress
                value={overviewInfo.vote_average * 10}
                color={voteColor}
                size="50px"
                bgColor="white"
                borderRadius="full"
                m="5px"
                mr="10px"
              >
                <CircularProgressLabel fontWeight="bold">
                  {overviewInfo.vote_average?.toFixed(1)}
                </CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight="medium">
                Over {overviewInfo.vote_count} votes.
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
            <Text>{overviewInfo.overview}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;

/*
adult: false
backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg"
belongs_to_collection: {id: 185103, name: 'Hotel Transylvania Collection', poster_path: '/9nR1xIcDo84gbbNZeFb9NCZYTdw.jpg', backdrop_path: '/5MJt6g7k9gADQH4xHn5mOEMa3Vr.jpg'}
budget: 0
genres: (5) [{…}, {…}, {…}, {…}, {…}]
homepage: "https://www.hoteltmovie.com"
id: 585083
imdb_id: "tt9848626"
original_language: "en"
original_title: "Hotel Transylvania: Transformania"
overview: "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy."
popularity: 847.447
poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg"
production_companies: (4) [{…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2022-02-25"
revenue: 0
runtime: 87
spoken_languages: [{…}]
status: "Released"
tagline: "Change can be scary."
title: "Hotel Transylvania: Transformania"
video: false
vote_average: 7.1
vote_count: 920
*/
