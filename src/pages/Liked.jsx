import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";

// https://api.themoviedb.org/3/movie/550?api_key=ed82f4c18f2964e75117c2dc65e2161d
const Liked = () => {
  const [likedData, setLikedData] = useState([]);

  useEffect(() => {
    // let movieArray = [];
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
        )
        .then((res) => setLikedData((listData) => [...listData, res.data]));
    }
  }, []);
  return (
    <div>
      <Navigation />
      <h2>Coups de coeur</h2>
      <div className="liked-container">
        {likedData.length > 0 ? (
          likedData.map((movie) => <Movie movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun résultat</h2>
        )}
      </div>
    </div>
  );
};

export default Liked;
