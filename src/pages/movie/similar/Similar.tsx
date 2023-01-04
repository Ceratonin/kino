import { useContext } from "react";
import MovieCard from "../../../components/movieCard/MovieCard";
import movieDataContext from "../../../contexts/movieDataContext";

const Similar = () => {
  const { recommendations } = useContext(movieDataContext);

  return (
    <div className="similar-panel">
      <p>Similar Movies:</p>
      <div
        className={`panel-wrapper ${!recommendations.results.length && "err"}`}
      >
        {recommendations.results.length ? (
          recommendations.results
            .splice(0, 5)
            .map((res, key) => (
              <MovieCard
                id={res.id}
                key={key}
                title={res.title}
                posterUrl={res.poster_path}
                imageSize="w220_and_h330_face"
                containerSize={{ height: 218, width: 145 }}
              />
            ))
        ) : (
          <div>No Similar Movies</div>
        )}
      </div>
    </div>
  );
};

export default Similar;
