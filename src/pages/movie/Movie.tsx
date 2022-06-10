import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import UserPanel from "./userPanel/UserPanel";
import MovieInfo from "./movieInfo/MovieInfo";
import Backdrop from "./backdrop/Backdrop";
import { movieDataObj } from "../../constants/movieDataObj";
import { getMovieData } from "../../services/getMovieData";
import { MovieHeader } from "./movieHeader/MovieHeader";
import { MovieActors } from "./movieActors/MovieActors";

const Movie = () => {
  const [movieData, setMovieData] = useState(movieDataObj);

  useEffect(() => {
    getMovieData(64690).then((res) => {
      setMovieData(res);
    });
  }, []);

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
            <MovieHeader movieData={movieData} />
            <div className="movie_overview">{movieData.overview}</div>
            <UserPanel movieData={movieData} />
            <MovieInfo movieData={movieData} />
            <MovieActors actors={movieData.credits}/>
            <div className="video"></div>
            <div className="photos"></div>
            <div className="reccomend"></div>
            <div className="lists"></div>
            <div className="reviews"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
