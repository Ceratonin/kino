import React, { useEffect, useMemo, useState } from "react";
import { getPopularMovies } from "../../services/getPopularMovies";
import MovieCard from "../movieCard/MovieCard";

interface IMovieData {
  poster_path: string;
  title: string;
}

function MovieList() {
  const [popularMoviesArray, setPopularMoviesArray] = useState([]);

  useEffect(() => {
    getPopularMovies(1).then((res) => setPopularMoviesArray(res));
  }, []);

  return (
    <div className="container">
      {popularMoviesArray.map((movieData: IMovieData, key) => (
        <MovieCard
          key={key}
          posterUrl={movieData.poster_path}
          title={movieData.title}
        />
      ))}
    </div>
  );
}

export default MovieList;
