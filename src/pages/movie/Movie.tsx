import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDataObj } from "constants/movieDataObj";
import movieDataContext from "contexts/movieDataContext";
import { getMovieData } from "services/getMovieData";
import Backdrop from "./backdrop/Backdrop";
import ReviewsPanel from "./reviewsPanel/ReviewsPanel";
import MovieDataRender from "./MovieDataRender";

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

  const movieDataMemo = useMemo(() => movieData, [movieData]);

  return (
    <div className="movie-page">
      {backdropUrl && <Backdrop posterUrl={movieData.backdrop_path} />}

      <div className={`movie-page__content ${backdropUrl || "no-backdrop"}`}>
        <div className="container">
          <movieDataContext.Provider value={movieDataMemo}>
            <MovieDataRender />

            <ReviewsPanel reviews={movieData.reviews} />
          </movieDataContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Movie;
