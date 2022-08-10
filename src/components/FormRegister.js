import React, {useState} from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import useInput from "../hooks/useInputs";

const FormRegister = ({onClose}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const username = useInput()
  const name = useInput()
  const lastName = useInput()
  const email = useInput()
  const password = useInput()

  const submitHandler = async () => {
    try {
      await axios.post("http://localhost:3002/api/auth/register", {
        username: username.value,
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      });
      onClose()
    } catch ({ response }) {
      console.log("Register Catch repsonse: ", response);
    }
  }

  return (
    <FormControl isRequired>
      <FormLabel mt="10px">First Name</FormLabel>
      <Input placeholder="First Name" id="firstName" {...name}/>
      <FormLabel mt="10px" >Last Name</FormLabel>
      <Input placeholder="Last Name" id="lastName" {...lastName}/>
      <FormLabel mt="10px" >Username</FormLabel>
      <Input placeholder="Username" id="username" {...username}/>
      <FormLabel mt="10px" >Email</FormLabel>
      <Input placeholder="Email" id="email" {...email}/>
      <FormLabel mt="10px" >Password</FormLabel>
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
      <Button
        onClick={submitHandler}
        mt="15px"
        position="relative"
        left="378px"
        colorScheme="whatsapp"
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default FormRegister;
