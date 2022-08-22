import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import useInput from "../hooks/useInputs";
import { useDispatch } from "react-redux";
import { logInRequest } from "../store/user";

const FormLogin = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const username = useInput();
  const password = useInput();

  const submitHandler = () => {
    dispatch(
      logInRequest({
        username: username.value,
        password: password.value,
      })
    );
    onClose();
  };

  return (
    <FormControl isRequired>
      <FormLabel mt="10px">Email</FormLabel>
      <Input placeholder="Email" id="email" {...username} />
      <FormLabel mt="10px">Password</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          id="password"
          {...password}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={submitHandler} mt="15px" colorScheme="whatsapp">
          Submit
        </Button>
      </Box>
    </FormControl>
  );
};

export default FormLogin;
