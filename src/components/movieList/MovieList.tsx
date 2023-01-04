import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/getPopularMovies";
import { TMovieList } from "../../types/movieData";
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
    <div className="movieList">
      <hr />
      <p>Popular movies</p>
      <div className="movieList__content">
        {!isLoaded
          ? [...new Array(20)].map((el, key) => <MovieCardSkeleton key={key} />)
          : popularMoviesArray.map((movieData: TMovieList) => (
              <MovieCard
                key={movieData.id}
                imageSize="w220_and_h330_face"
                containerSize={{ width: 154, height: 231 }}
                posterUrl={movieData.poster_path}
                title={movieData.title}
                id={movieData.id}
              />
            ))}
      </div>
    </div>
  );
};

export default MovieList;
