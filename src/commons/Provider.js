import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Provider = ({ logo_path, provider_name }) => {
  const path = "https://image.tmdb.org/t/p/original";

  return (
    <Box borderRadius="15px" border="1px" borderColor="#003049" overflow="hidden" m="10px" ml="0px">
      <Image
        src={`${path}${logo_path}`}
        alt={provider_name}
        w="60px"
        h="60px"
      />
    </Box>
  );
};

export default Provider;
