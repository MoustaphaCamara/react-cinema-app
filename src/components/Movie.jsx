import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      {/* image : https://image.tmdb.org/t/p/original/  */}
      {movie.backdrop_path && (
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
          alt={"poster for " + movie.original_title}
        />
      )}
      <h3>{movie.original_title}</h3>
      <div className="description">Sorti le : {movie.release_date}</div>
      <p className="subtitle">{movie.vote_average}/10</p>
      <p>genres ici</p>
      <p className="subtitle">Synopsis</p>
      <p className="description">{movie.overview}</p>
      {/* <button>Ajouter aux coups de coeur</button> */}
    </div>
  );
};

export default Movie;
