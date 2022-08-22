import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbHeartPlus } from "react-icons/tb";
import { addMovie } from "../utils/addMovie";
import getSelected from "../utils/getSelected";
import { useToast } from "@chakra-ui/react";
import { getUserMovies } from "../store/userMovies";
import { addTv } from "../utils/addTv";
import { getUserTvs } from "../store/userTvs";

const AddButton = ({ id, type }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const toast = useToast();

  const addHandler = async () => {
    const selected = await getSelected(type, id);
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
          id: user.id,
          tv: {
            genresList,
            tvId,
            seasonsCount,
            createdByList,
            ...selected,
          },
        };
        delete data.tv.id;
        const added = await addTv(data);
        await dispatch(getUserTvs())

        if ((added.status = 200)) {
          toast({
            title: "Tv Series Added Succesfully",
            status: "success",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        }
      } else {
        const genresList = selected.genres.map((genre) => genre.name);
        const movieId = selected.id;
        const data = {
          id: user.id,
          movie: { genresList, movieId, ...selected },
        };
        delete data.movie.id;
        const added = await addMovie(data);
        await dispatch(getUserMovies())
        
        if ((added.status = 200)) {
          toast({
            title: "Movie Added Succesfully",
            status: "success",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        }
      }
    }
  };

  return <TbHeartPlus color="#c1121f" size="30px" onClick={addHandler} />;
};

export default AddButton;
