import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { TbHeartPlus } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import Provider from "../commons/Provider";
import popcornCardH from "../assets/popcornCardH.jpeg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Overview = () => {
  const { type, id } = useParams();
  const selected = useSelector((state) => state.selected);
  const providers = useSelector((state) => state.providers);
  const country = useSelector((state) => state.geoInfo);
  const navigate = useNavigate();

  let voteColor = "green.400";
  if (selected.vote_average < 6.5) voteColor = "yellow.400";
  if (selected.vote_average < 4) voteColor = "red.400";
  let cardName = selected.title ? selected.title : selected.name;

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

  const navigationHandler = () => {
    navigate(`/search/${type}`);
  };
  const path = "https://image.tmdb.org/t/p";

  // bgColor="#fdf0d5" color="#003049"

  return type === "movie" ? (
    <>
      <Box
        mx="10%"
        mt="20px"
        p="30px"
        borderRadius="20px"
        border="1px"
        overflow="hidden"
        display="flex"
        flexWrap="wrap"
        bgColor="white"
        minH="450px"
        justifyContent="space-between"
        bgImage={popcornCardH}
        bgSize="cover"
        objectFit="fill"
        bgPosition="center"
        bgRepeat="no-repeat"
        color="#003049"
      >
        <Button
          size="sm"
          w="100%"
          minW="137px"
          mb="10px"
          mr="85%"
          colorScheme="blackAlpha"
          onClick={navigationHandler}
        >
          <ArrowBackIcon boxSize="20px" mr="5px" />
          Back to search
        </Button>
        <Box display="flex" flexWrap="nowrap" justifyContent="space-between">
          <Box w="300px" h="450px" filter="auto" blur="none">
            <Image
              src={`${path}/w342${selected.poster_path}`}
              alt={cardName}
              borderRadius="20px"
            />
          </Box>
          <Box maxW="70%" borderRadius="20px" p="16px" bgColor="whiteAlpha.700">
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
                Realease date: {selected.release_date}
              </Text>
              <Text mt="5px" fontWeight="medium">
                Genres:{selected.genres.map((item) => " " + item.name)}
              </Text>
              <Box mt="5px" display="flex">
                {providers[country.country_code]?.flatrate !== undefined ? (
                  providers[country.country_code]?.flatrate.map((provider) => (
                    <Provider key={provider.provider_id} {...provider}/>
                  ))
                ) : (
                  <Text fontWeight="medium">
                    Not available for streaming in {country.country_name}
                  </Text>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Box
        mx="10%"
        mt="20px"
        p="30px"
        borderRadius="20px"
        border="1px"
        overflow="hidden"
        display="flex"
        flexWrap="wrap"
        bgColor="white"
        minH="450px"
        justifyContent="space-between"
        bgImage={popcornCardH}
        bgSize="cover"
        objectFit="fill"
        bgPosition="center"
        bgRepeat="no-repeat"
        color="#003049"
      >
        <Button
          size="sm"
          w="100%"
          minW="137px"
          mb="10px"
          mr="85%"
          colorScheme="blackAlpha"
          onClick={navigationHandler}
        >
          <ArrowBackIcon boxSize="20px" mr="5px" />
          Back to search
        </Button>
        <Box display="flex" flexWrap="nowrap" justifyContent="space-between">
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
                Genres:
                {selected?.genres
                  ? selected?.genres.map((item) => " " + item.name)
                  : ""}
              </Text>
              <Box display="flex">
                {providers[country.country_code]?.flatrate !== undefined ? (
                  providers[country.country_code]?.flatrate.map((provider) => (
                    <Provider key={provider.provider_id} {...provider} />
                  ))
                ) : (
                  <Text fontWeight="medium">
                    Not available for streaming in {country.country_name}
                  </Text>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
