import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "@chakra-ui/react";
import underConstruction from "../assets/underConstruction.jpeg"

const Users = () => {
  // const [users, setUsers] = useState([]);
  // const getUsers = () => {
  //   axios
  //     .get("http://localhost:3001/api/users")
  //     .then((response) => (response.data))
  //     .then(result => setUsers(result))
  //     .catch((error) => console.log("Error: ", error));
  // };
  // useEffect(() => {
  //   getUsers();
  //   console.log("se ejecuto el effect de users")
  //   console.log(users)
  // }, []);

  return (
    <Image src={underConstruction} />
  );
};

export default Users;
