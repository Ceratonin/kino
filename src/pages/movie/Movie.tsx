import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import { movieDataObj } from "../../constants/movieDataObj";
import { getMovieData } from "../../services/getMovieData";
import Backdrop from "./Backdrop";

const Movie = () => {
  const [movieData, setMovieData] = useState(movieDataObj);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getMovieData(64690).then((res) => {
      setMovieData(res);
      setIsLoaded(true);
    });
  }, []);

  const getReleaseYear = () => movieData.release_date.split("-")[0];

  return (
    <div className="movie">
      <Backdrop
        isLoaded={isLoaded}
        backdropImageUrl={movieData.backdrop_path}
      />
      <Header movieHeader />

      <div className="movie_content">
        <div className="container">
          <div className="movie_poster">
            <MovieCard
              posterUrl={movieData.poster_path}
              containerSize={{ width: 230, height: 345 }}
              imageSize="original"
              title={movieData.original_title}
            />
          </div>

          <div className="movie_data">
            <div className="movie_header">
              <div className="movie_title">{movieData.original_title}</div>
              <div className="movie_release_date">{getReleaseYear()}</div>
              <div className="movie_shot_by">
                <p>Shot by:</p>
                <div className="movie_director">Director</div>
              </div>
            </div>
            <div className="movie_overview">{movieData.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
