import { useContext } from "react";
import movieDataContext from "contexts/movieDataContext";
import MovieCard from "components/movieCard/MovieCard";
import ActorsPanel from "./actorsPanel/ActorsPanel";
import DataPanel from "./dataPanel/DataPanel";
import ImagesPanel from "./imagesPanel/ImagesPanel";
import MovieHeader from "./movieHeader/MovieHeader";
import Similar from "./similar/Similar";
import UserPanel from "./userPanel/UserPanel";
import VideosPanel from "./videosPanel/VideosPanel";

const MovieDataRender = () => {
  const movieData = useContext(movieDataContext);

  return (
    <div className="grid-wrapper">
      <div className="movie-page__poster">
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
      <div className="movie-page__overview">{movieData.overview}</div>

      <MovieHeader />
      <UserPanel />
      <DataPanel />
      <ActorsPanel />
      <VideosPanel />
      <ImagesPanel />
      <Similar />
    </div>
  );
};

export default MovieDataRender;
