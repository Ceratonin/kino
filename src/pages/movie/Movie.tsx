import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import MovieCard from "../../components/movieCard/MovieCard";
import UserPanel from "./userPanel/UserPanel";
import DataPanel from "./dataPanel/DataPanel";
import Backdrop from "./backdrop/Backdrop";
import ActorsPanel from "./actorsPanel/ActorsPanel";
import VideosPanel from "./videosPanel/VideosPanel";
import MovieHeader from "./movieHeader/MovieHeader";
import Similar from "./similar/Similar";
import ReviewsPanel from "./reviewsPanel/ReviewsPanel";
import { movieDataObj } from "../../constants/movieDataObj";
import { getMovieData } from "../../services/getMovieData";
import ImagesPanel from "./imagesPanel/ImagesPanel";

const Movie = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState(movieDataObj);
  const [backdropUrl, setBackdropUrl] = useState(true);

  useEffect(() => {
    getMovieData(id!).then((res) => {
      setMovieData(res);
      setBackdropUrl(res.backdrop_path);
    });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="movie">
      {backdropUrl && <Backdrop posterUrl={movieData.backdrop_path} />}
      <Header movieHeader />

      <div className={`movie_content ${backdropUrl || "no-backdrop"}`}>
        <div className="container">
          <div className="grid-wrapper">
            <div className="movie_poster">
              {/* Skeleton could be added */}
              {movieData.poster_path && (
                <MovieCard
                  notLink
                  id={movieData.id}
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
            <DataPanel
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
            <Similar similar={movieData.recommendations} />
          </div>
          <ReviewsPanel reviews={movieData.reviews} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
