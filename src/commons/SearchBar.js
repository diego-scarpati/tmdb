import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, path } from "../utils/search";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSaveSearchData }) => {
  let { type } = useParams();
  const [searchValue, setSearchValue] = useState([]);

  if (!type) type = "movie";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${path}/${type}?${apiKey}&query=${searchValue}`)
      .then((result) => onSaveSearchData(result.data.results))
      .catch(() => console.log("Axios salio mal"))
      .finally(() => (setSearchValue("")));
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InputGroup w="90%" m="3%" p="3%, 0%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="#003049"/>}
          />
          <Input
            bgColor="#fdf0d5"
            color="#003049"
            fontWeight="medium"
            placeholder="Search for a movie, tv show..."
            value={searchValue}
            onChange={handleChange}
          />
        </InputGroup>
        {/* <input
          type="text"
          placeholder="Search for a movie, tv show..."
          style={{ width: "90%", margin: "3%", padding: "3%, 0%" }}
          value={searchValue}
          onChange={handleChange}
        ></input> */}
      </form>
    </>
  );
};

export default SearchBar;
