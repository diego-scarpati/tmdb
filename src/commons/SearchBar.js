import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { setSearch } from "../store/search";

const SearchBar = () => {
  let { type } = useParams();
  const [searchValue, setSearchValue] = useState([]);
  const dispatch = useDispatch();

  if (!type) type = "movie";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch({ type, searchValue }));
    setSearchValue("");
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
        <InputGroup w="70%" m="3%" p="3%, 0%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="#003049" />}
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
      </form>
    </>
  );
};

export default SearchBar;
