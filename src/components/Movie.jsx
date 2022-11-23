import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div className="img-container">
        <img
          src={
            movie.backdrop_path
              ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
              : "/src/assets/media/not-found.png"
          }
          alt={"poster for " + movie.original_title}
        />
      </div>
      <div className="info-container">
        <link rel="stylesheet" href="style.css" />
        <h3>{movie.original_title}</h3>
        <div className="description">Sorti le : {movie.release_date}</div>
        <p className="subtitle">{movie.vote_average}/10</p>
        <ul>
          <li>genre1</li>
          <li>genre2</li>
        </ul>
        <p className="subtitle">Synopsis</p>
        <p className="description overview">{movie.overview}</p>
        <div className="button-container">
          <button
            onClick={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "block";
            }}
          >
            🖤
          </button>
          <button
            style={{ display: "none" }}
            onClick={(e) => {
              e.target.style.display = "none";
              e.target.previousElementSibling.style.display = "block";
            }}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
