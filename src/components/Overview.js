import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  // const { user, setUser } = useContext(UserContext);
  const { type, id } = useParams();
  const [overviewInfo, setOverviewInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/${type}/${id}`, {
        params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
      })
      .then((result) => result.data)
      .then((data) => {
        setOverviewInfo(data);
      })
      .catch((error) => console.log("Axios error: ", error));
  }, [id]);

  const addFavoritesHandler = async () => {
    try {
      type === "movie"
        ? await axios.put("http://localhost:3001/api/addMovie", {
            // user: user,
            info: overviewInfo,
          })
        : await axios.put("http://localhost:3001/api/addTv", {
            // user: user,
            info: overviewInfo,
          });

      await navigate("/");
    } catch (error) {
      console.log("Add to Favorites error: ", error);
    }
  };

  const path = "https://image.tmdb.org/t/p/w342";

  return (
    <>
      <div>
        <img
          src={`${path}${overviewInfo.poster_path}`}
          alt={overviewInfo.name ? overviewInfo.name : overviewInfo.title}
        />
      </div>
      {/* {user.id && <div onClick={addFavoritesHandler}>Add to Favorites</div>} */}
      <div>
        <h2>{overviewInfo.name ? overviewInfo.name : overviewInfo.title}</h2>
        <h4>Overview</h4>
        <p>{overviewInfo.overview}</p>
        <p>{overviewInfo.vote_average}</p>
      </div>
    </>
  );
};

export default Overview;

/*
adult: false
backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg"
belongs_to_collection: {id: 185103, name: 'Hotel Transylvania Collection', poster_path: '/9nR1xIcDo84gbbNZeFb9NCZYTdw.jpg', backdrop_path: '/5MJt6g7k9gADQH4xHn5mOEMa3Vr.jpg'}
budget: 0
genres: (5) [{…}, {…}, {…}, {…}, {…}]
homepage: "https://www.hoteltmovie.com"
id: 585083
imdb_id: "tt9848626"
original_language: "en"
original_title: "Hotel Transylvania: Transformania"
overview: "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy."
popularity: 847.447
poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg"
production_companies: (4) [{…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2022-02-25"
revenue: 0
runtime: 87
spoken_languages: [{…}]
status: "Released"
tagline: "Change can be scary."
title: "Hotel Transylvania: Transformania"
video: false
vote_average: 7.1
vote_count: 920
*/
