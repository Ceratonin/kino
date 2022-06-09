import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import UserPanel from "./userPanel/UserPanel";
import { movieDataObj } from "../../constants/movieDataObj";
import { getMovieData } from "../../services/getMovieData";
import Backdrop from "./backdrop/Backdrop";

const Movie = () => {
  const [movieData, setMovieData] = useState(movieDataObj);
  // const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getMovieData(64690).then((res) => {
      setMovieData(res);
      // setIsLoaded(true)
    });
  }, []);

  const getReleaseYear = () => movieData.release_date.split("-")[0];

  return (
    <div className="movie">
      <Backdrop posterUrl={movieData.backdrop_path} />
      <Header movieHeader />

      <div className="movie_content">
        <div className="container">
          <div className="grid-wrapper">
            <div className="movie_poster">
              {/* Skeleton could be added */}
              {movieData.poster_path && (
                <MovieCard
                  posterUrl={movieData.poster_path}
                  containerSize={{ width: 230, height: 345 }}
                  imageSize="original"
                  title={movieData.original_title}
                />
              )}
            </div>

            <div className="movie_header">
              <div className="movie_title">{movieData.title}</div>
              <div className="movie_release_date">{getReleaseYear()}</div>
              <div className="movie_shot_by">
                <p>Shot by:</p>
                <div className="movie_director">Director</div>
              </div>
            </div>

            <div className="movie_overview">{movieData.overview}</div>

            <UserPanel />

            {/* <div className="grid-wrapper">
            <div className="poster">
              <MovieCard
                posterUrl={movieData.poster_path}
                containerSize={{ width: 230, height: 345 }}
                imageSize="original"
                title={movieData.original_title}
                />
                </div>
                <div className="title"></div>
                <div className="overview"></div>
            <div className="panel"></div>
            <div className="info"></div>
            <div className="actors"></div>
            <div className="video"></div>
            <div className="photos"></div>
            <div className="reccomend"></div>
            <div className="lists"></div>
            <div className="reviews"></div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
