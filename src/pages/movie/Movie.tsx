import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import UserPanel from "./userPanel/UserPanel";
import MovieInfo from "./dataPanel/DataPanel";
import Backdrop from "./backdrop/Backdrop";
import ActorsPanel from "./actorsPanel/ActorsPanel";
import VideosPanel from "./videosPanel/VideosPanel";
import MovieHeader from "./movieHeader/MovieHeader";
import Recommended from "./similar/Similar";
import ReviewsPanel from "./reviewsPanel/ReviewsPanel";
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
            <MovieHeader
              release_date={movieData.release_date}
              credits={movieData.credits}
              title={movieData.title}
            />
            <div className="movie_overview">{movieData.overview}</div>
            <UserPanel
              original_title={movieData.original_title}
              vote_average={movieData.vote_average}
              popularity={movieData.popularity}
            />
            <MovieInfo
              release_date={movieData.release_date}
              runtime={movieData.runtime}
              tagline={movieData.tagline}
              budget={movieData.budget}
              revenue={movieData.revenue}
              original_language={movieData.original_language}
              genres={movieData.genres}
            />
            <ActorsPanel cast={movieData.credits.cast} />
            <VideosPanel videos={movieData.videos} />
            <ImagesPanel images={movieData.images} />
            <Recommended similar={movieData.recommendations} />
          </div>
          <ReviewsPanel reviews={movieData.reviews} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
