import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../App";
// import Card from "../commons/Card";
import axios from "axios";
// import { getUser } from "../utils/getUser";

const Profile = () => {
  // const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // const [favoritesList, setFavoritesList] = useState([]);

  
  const removeFavoriteMovieHandler = async (e) => {
    const id = parseInt(e.target.id);
    try {
      await axios.put("http://localhost:3001/api/removeMovie", {
        // user: user,
        id: id,
      });
      await navigate("/")
    } catch (error) {
      console.log("Remove from Favorites error: ", error);
    }
  };
  const removeFavoriteTvHandler = async (e) => {
    const id = parseInt(e.target.id);
    try {
      await axios.put("http://localhost:3001/api/removeMovie", {
        // user: user,
        id: id,
      });
      await navigate("/")
    } catch (error) {
      console.log("Remove from Favorites error: ", error);
    }
  };
  
  // console.log("user de profile: ", user);
  // console.log("elemento favorites de profile: ", user.favorites);
  
  return (
    <>
      {/* <h1>{`Hello ${user.name} ${user.lastName}`}</h1> */}
      <h2>Favorite Movies: </h2>
      {/* {user.favorites.movies && (
        <div>
          {user.favorites.movies.map((item) => (
            <div key={item.id}>
              <Link to={`/search/movie/${item.id}`}>
                <Card {...item} />
              </Link>
              <div onClick={removeFavoriteMovieHandler} id={item.id}>
                x
              </div>
            </div>
          ))}
        </div>
      )} */}
      <h2>Favorite Tv Series: </h2>
      {/* {user.favorites.tv && (
        <div>
          {user.favorites.tv.map((item) => (
            <div key={item.id}>
              <Link to={`/search/tv/${item.id}`}>
                <Card {...item} />
              </Link>
              <div onClick={removeFavoriteTvHandler} id={item.id}>
                x
              </div>
            </div>
          ))}
        </div>
      )} */}
    </>
  );
};

export default Profile;
