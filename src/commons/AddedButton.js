import { useToast } from "@chakra-ui/react";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../utils/deleteMovie";
import { userMovies } from "../utils/getUserMovies";
import getSelected from "../utils/getSelected";
import { getUserMovies } from "../store/userMovies";
import { removeTv } from "../utils/deleteTv";
import { userTvs } from "../utils/getUserTvs";
import { getUserTvs } from "../store/userTvs";

const AddedButton = ({ id, type, setMovies, setTvs }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const deletedId = id;
  const toast = useToast();

  const deleteHandler = async () => {
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
        const data = {
          id: user.id,
          tv: deletedId,
          type,
        };
        delete data.tv.id;
        const removed = await removeTv(data);
        if ((removed.status = 202)) {
          toast({
            title: "Tv Series Removed Succesfully.",
            description: "Tv Series was removed from your favorites list.",
            status: "success",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        }
        const userTvFavs = await userTvs(user.id);
        if (setTvs) await setTvs(userTvFavs);
        await dispatch(getUserTvs())
      } else {
        const data = {
          id: user.id,
          movie: deletedId,
          type,
        };
        const removed = await removeMovie(data);

        if ((removed.status = 202)) {
          toast({
            title: "Movie Removed Succesfully.",
            description: "Movie was removed from your favorites list.",
            status: "success",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        }
        const userMovieFavs = await userMovies(user.id);
        if (setMovies) await setMovies(userMovieFavs);
        await dispatch(getUserMovies())
      }
    }
  };

  return <IoIosHeart color="#c1121f" size="30px" onClick={deleteHandler} />;
};

export default AddedButton;
