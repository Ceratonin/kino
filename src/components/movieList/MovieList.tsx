import React, { useEffect, useMemo, useState } from "react";
import { getPopularMovies } from "../../services/getPopularMovies";
import { getMoviePoster } from "../../services/getMoviePoster";
import MovieCard from "../movieCard/MovieCard";

interface IMovieData {
  poster_path: string;
  title: string;
}

function MovieList() {
  const [posterUrlArray, setPosterUrlArray] = useState([""]);
  const [popularMoviesArray, setPopularMoviesArray] = useState([]);

  useEffect(() => {
    getPopularMovies(1).then((res) => setPopularMoviesArray(res));
  }, []);

  const popularMoviesTitlesArray = useMemo(
    () => popularMoviesArray.map((movieData: IMovieData) => movieData.title),
    [popularMoviesArray]
  );

  useEffect(() => {
    popularMoviesTitlesArray.map((title) =>
      getMoviePoster(title).then((res) =>
        setPosterUrlArray((arr) => [...arr, res])
      )
    );
  }, []); // <--------- popularMoviesArray ??? 

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
