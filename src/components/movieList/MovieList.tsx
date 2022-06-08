import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/getPopularMovies";
import { IMovieData } from "../../types/movieData";
import MovieCard from "../movieCard/MovieCard";
import MovieCardSkeleton from "../movieCard/MovieCardSkeleton";

const MovieList = () => {
  const [popularMoviesArray, setPopularMoviesArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getPopularMovies(1).then((res) => {
      setPopularMoviesArray(res);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="content">
      <hr />
      <p className="content-top">Popular movies</p>
      <div className="content-items">
        {!isLoaded
          ? [...new Array(20)].map((el, key) => <MovieCardSkeleton key={key} />)
          : popularMoviesArray.map((movieData: IMovieData) => (
              <MovieCard
                key={movieData.id}
                posterUrl={movieData.poster_path}
                title={movieData.title}
              />
            ))}
      </div>
    </div>
  );
}

export default MovieList;
