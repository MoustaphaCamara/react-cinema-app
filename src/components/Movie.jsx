import React from "react";

const Movie = ({ movie }) => {
  const dateFormatter = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comedie");
          break;
        case 80:
          genreArray.push("Policier");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantaisie");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musique");
          break;
        case 29648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-Fiction");
          break;
        case 10770:
          genreArray.push("Téléfilm");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("Western");
          break;

        default:
          break;
      }
    }
    return genreArray;
  };

  const addToStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };
  const removeFromStorage = () => {
    let storedData = window.localStorage.movies.split(",");
  };
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
        <div className="description">
          Sorti le :{" "}
          {movie.release_date ? dateFormatter(movie.release_date) : ""}
        </div>
        <p className="subtitle">{movie.vote_average}/10 ⭐</p>
        <ul>
          {movie.genre_ids
            ? genreFinder().map((genre) => <li key={genre}>{genre}</li>)
            : null}
        </ul>
        <p className="subtitle">Synopsis</p>
        <p className="description overview">{movie.overview}</p>
        {movie.genre_ids ? (
          <button className="btn" onClick={() => addToStorage()}>
            🖤
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => {
              removeFromStorage();
              window.location.reload();
            }}
          >
            ❤️
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
