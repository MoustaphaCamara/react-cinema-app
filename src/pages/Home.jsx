import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${
          search ? search : "a"
        }&language=fr-FR`
      )
      .then((res) => setMovieData(res.data.results));
  }, [search]);
  return (
    <div>
      <Navigation />
      <header>
        <h2>Liste de films</h2>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Vous cherchez un titre?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <div className="movie-container">
        {movieData.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
