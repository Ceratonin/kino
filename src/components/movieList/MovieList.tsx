import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/getPopularMovies";
import { IMovieData } from "../../types/movieData";
import MovieCard from "../movieCard/MovieCard";

function MovieList() {
  const [popularMoviesArray, setPopularMoviesArray] = useState([]);

  useEffect(() => {
    getPopularMovies(1).then((res) => setPopularMoviesArray(res));
  }, []);

  return (
    <div className="content">
      <hr/>
      <p className="content-top">Popular movies</p>
      <div className="content-items">
        {popularMoviesArray.map((movieData: IMovieData, key) => (
          <MovieCard
            key={key}
            posterUrl={movieData.poster_path}
            title={movieData.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
