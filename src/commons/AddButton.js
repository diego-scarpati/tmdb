import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbHeartPlus } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { addMovie } from "../utils/addMovie";
import getSelected from "../utils/getSelected";
import { useToast } from "@chakra-ui/react";
// import { addMovieFavorites } from "../store/added";

const AddButton = ({ id, type }) => {
  // const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  // const selected = useSelector((state) => state.selected);
  const toast = useToast();

  const addHandler = async () => {
    const selected = await getSelected(type, id);
    // const postOnDB = async () => {
      if (!user) {
        toast({
          title: "Error",
          description: `Must be logged in to add ${
            type === "tv" ? "TV Show" : "Movie"
          }.`,
          status: "error",
          duration: 4000,
          position: "top",
          isClosable: true,
          containerStyle: {
            marginTop: "80px",
          },
        });
      } else {
        if (type === "tv") {
          const seasonsCount = selected.seasons.length;
          const genresList = selected.genres.map((genre) => genre.name);
          const createdByList = selected.created_by.map(
            (creator) => creator.name
          );
          const tvId = selected.id;
          const data = {
            id: { id: user.id },
            tv: {
              genresList,
              tvId,
              seasonsCount,
              createdByList,
              ...selected,
            },
          };
          // await dispatch(addMovieFavorites(data))
          await addMovie(data)
        } else {
          const genresList = selected.genres.map((genre) => genre.name);
          const movieId = selected.id;
          const data = {
            id: user.id,
            movie: { genresList, movieId, ...selected },
          };
          delete data.movie.id
          // await dispatch(addMovieFavorites(data))
          await addMovie(data)
        }
      }
    // };
    // postOnDB()
  };

  return <TbHeartPlus color="#c1121f" size="30px" onClick={addHandler} />;
};

export default AddButton;
