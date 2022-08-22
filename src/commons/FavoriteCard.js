import React from 'react'
import noImg from "../assets/noImg.jpeg"

const FavoriteCard = () => {
  const path = "https://image.tmdb.org/t/p/w185";

  return (
    <div>
      {poster_path ? (
        <img src={`${path}${poster_path}`} alt={name} />
      ) : (
        <img src={noImg} alt={name} style={{width:"185px", height:"278px"}}/>
      )}
      <h4>{name}</h4>
      <p>{release_date ? release_date : first_air_date}</p>
      <p>{vote_average}</p>
      <button>x</button>
    </div>
  );
};


export default FavoriteCard