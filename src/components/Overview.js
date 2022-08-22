import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import Provider from "../commons/Provider";
import popcornCardH from "../assets/popcornCardH.jpeg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import AddButton from "../commons/AddButton";

const Overview = ({ isMobile }) => {
  const { type } = useParams();
  const selected = useSelector((state) => state.selected);
  const providers = useSelector((state) => state.providers);
  const country = useSelector((state) => state.geoInfo);
  const navigate = useNavigate();

  let voteColor = "green.400";
  if (selected.vote_average < 6.5) voteColor = "yellow.400";
  if (selected.vote_average < 4) voteColor = "red.400";
  let cardName = selected.title ? selected.title : selected.name;

  const navigationHandler = () => {
    navigate(`/search/${type}`);
  };
  const path = "https://image.tmdb.org/t/p";

  if (isMobile)
    return (
      <>
        <Box
          mx={{ xl: "10%", lg: "8%", md: "4%", sm: "3%" }}
          mt="20px"
          p="30px"
          borderRadius="20px"
          border="1px"
          overflow="hidden"
          display="flex"
          flexDirection="column"
          bgColor="white"
          bgImage={popcornCardH}
          bgSize="cover"
          objectFit="fill"
          bgPosition="center"
          bgRepeat="no-repeat"
          color="#003049"
        >
          <Button
            size="sm"
            w="113px"
            minW="137px"
            mb="10px"
            mr="85%"
            colorScheme="blackAlpha"
            onClick={navigationHandler}
          >
            <ArrowBackIcon boxSize="20px" mr="5px" />
            Back to search
          </Button>
          <Box display="flex" justifyContent="center" mx="auto">
            <Image
              src={`${path}/w500${selected.poster_path}`}
              alt={cardName}
              borderRadius="20px"
              w="300px"
              h="450px"
            />
          </Box>
          <Box
              borderRadius="20px"
              p="16px"
              bgColor="whiteAlpha.700"
            >
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
                  <AddButton />
                </Box>
              </Box>
              <Heading
                as="h2"
                fontSize={{ xl: "48px", lg: "42px", md: "36px", sm: "26px" }}
              >
                {cardName}
              </Heading>
              <Heading
                as="h4"
                fontSize={{ xl: "36px", lg: "28px", md: "24px", sm: "18px" }}
                mt="10px"
              >
                Overview:
              </Heading>
              <Box>
                <Text mt="5px" fontWeight="medium">
                  {selected.overview}
                </Text>
                {type === "movie" ? (
                  <Text mt="5px" fontWeight="medium">
                    Realease date: {selected.release_date}
                  </Text>
                ) : (
                  <Text mt="5px" fontWeight="medium">
                    Seasons: {selected?.seasons?.length}
                  </Text>
                )}
                <Text mt="5px" fontWeight="medium">
                  Genres:{selected.genres.map((item) => " " + item.name)}
                </Text>
                <Box mt="5px" display="flex">
                  {providers[country.country_code]?.flatrate !== undefined ? (
                    providers[country.country_code]?.flatrate.map(
                      (provider) => (
                        <Provider key={provider.provider_id} {...provider} />
                      )
                    )
                  ) : (
                    <Text fontWeight="medium">
                      Not available for streaming in {country.country_name}
                    </Text>
                  )}
                </Box>
              </Box>
            </Box>
        </Box>
      </>
    );
  if (!isMobile)
    return (
      <>
        <Box
          mx={{ xl: "10%", lg: "8%", md: "4%", sm: "3%" }}
          mt="20px"
          p="30px"
          borderRadius="20px"
          border="1px"
          overflow="hidden"
          display="flex"
          flexWrap="wrap"
          bgColor="white"
          minH={{ xl: "450px", lg: "350px" }}
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
            <Box
              maxW="70%"
              borderRadius="20px"
              p="16px"
              bgColor="whiteAlpha.700"
            >
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
                  <AddButton />
                </Box>
              </Box>
              <Heading
                as="h2"
                fontSize={{ xl: "48px", lg: "42px", md: "36px", sm: "26px" }}
              >
                {cardName}
              </Heading>
              <Heading
                as="h4"
                fontSize={{ xl: "36px", lg: "28px", md: "24px", sm: "18px" }}
                mt="10px"
              >
                Overview:
              </Heading>
              <Box>
                <Text mt="5px" fontWeight="medium">
                  {selected.overview}
                </Text>
                {type === "movie" ? (
                  <Text mt="5px" fontWeight="medium">
                    Realease date: {selected.release_date}
                  </Text>
                ) : (
                  <Text mt="5px" fontWeight="medium">
                    Seasons: {selected?.seasons?.length}
                  </Text>
                )}
                <Text mt="5px" fontWeight="medium">
                  Genres:{selected.genres.map((item) => " " + item.name)}
                </Text>
                <Box mt="5px" display="flex">
                  {providers[country.country_code]?.flatrate !== undefined ? (
                    providers[country.country_code]?.flatrate.map(
                      (provider) => (
                        <Provider key={provider.provider_id} {...provider} />
                      )
                    )
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
