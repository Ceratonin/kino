import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import UserPanel from "./userPanel/UserPanel";
import MovieInfo from "./dataPanel/DataPanel";
import Backdrop from "./backdrop/Backdrop";
import ActorsPanel from "./actorsPanel/ActorsPanel";
import VideosPanel from "./videosPanel/VideosPanel";
import MovieHeader from "./movieHeader/MovieHeader";
import { movieDataObj } from "../../constants/movieDataObj";
import { getMovieData } from "../../services/getMovieData";
import ImagesPanel from "./imagesPanel/ImagesPanel";

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
            <ActorsPanel actors={movieData.credits} />
            <VideosPanel videos={movieData.videos} />
            <ImagesPanel images={movieData.images}/>
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
