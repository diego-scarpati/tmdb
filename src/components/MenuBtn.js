import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Avatar,
  AvatarBadge,
  Text,
} from "@chakra-ui/react";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../store/user";

const MenuBtn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  const storeUser = useSelector(state => state.user)

  const navigateProfileHandler = () => {
    navigate("/profile")
  }

  const logOutHandler = () => {
    dispatch(logOutUser())
    navigate("/")
  }

  if (user!== null) {
    return (
      <Menu>
        <MenuButton
          p="0px"
          size="40px"
          transition="all 0.2s"
          borderRadius="full"
          as={Button}
          colorScheme="blackAlpha"
          color="#fdf0d5"
          fontSize="20px"
        >
          <Avatar
            // bg="#003049"
            bg="blackAlpha"
            w="40px"
            h="40px"
            // name={(user?.name[0]) , (user?.lastName[0])}
            // {user?.lastName[0]}
          />
        </MenuButton>
        <MenuList bgGradient="linear(to-b, #c1121f, #780000)" border="none">
          {/* <MenuGroup title="Log In Menu" fontSize={"20px"} mx="25%"> */}
          <MenuItem
            _hover={{ bgColor: "#780000" }}
            _active={{ bgColor: "#780000" }}
            _focus={{ bgColor: "#780000" }}
          >
            <Text w="100%" onClick={navigateProfileHandler}>Profile</Text>
          </MenuItem>
          <MenuItem
            _hover={{ bgColor: "#780000" }}
            _active={{ bgColor: "#780000" }}
            _focus={{ bgColor: "#780000" }}
          >
            <Text w="100%" onClick={logOutHandler}>Log Out</Text>
          </MenuItem>
          {/* </MenuGroup> */}
        </MenuList>
      </Menu>
    );
  } else {
    return (
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          as={Button}
          colorScheme="blackAlpha"
          color="#fdf0d5"
          fontSize="20px"
        >
          Log In
        </MenuButton>
        <MenuList bgGradient="linear(to-b, #c1121f, #780000)" border="none">
          {/* <MenuGroup title="Log In Menu" fontSize={"20px"} mx="25%"> */}
          <MenuItem
            _hover={{ bgColor: "#780000" }}
            _active={{ bgColor: "#780000" }}
            _focus={{ bgColor: "#780000" }}
          >
            <ModalLogin />
          </MenuItem>
          <MenuItem
            _hover={{ bgColor: "#780000" }}
            _active={{ bgColor: "#780000" }}
            _focus={{ bgColor: "#780000" }}
          >
            <ModalRegister />
          </MenuItem>
          {/* </MenuGroup> */}
        </MenuList>
      </Menu>
    );
  }
};

export default MenuBtn;
