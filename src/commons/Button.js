import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Button = (props) => {
  return (
    <Box
      w="120px"
      h="50px"
      p="5px"
      m="2px"
      textAlign="center"
      border="2px"
      borderRadius="20px"
      borderColor="black"
      boxShadow="inner"
    >
      <Text fontSize="24" fontWeight="bold" m="auto">
        {props.text}
      </Text>
    </Box>
  );
};

export default Button;
