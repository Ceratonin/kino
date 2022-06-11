import MovieCard from "../../../components/movieCard/MovieCard";

interface ISimilar {
  similar: {
    results: { title: string; poster_path: string }[];
  };
}

const Similar = ({ similar }: ISimilar) => {
  return (
    <div className="similar-panel">
      <p>Similar Movies:</p>
      <div className={`panel-wrapper ${similar.results === [] ? "err" : ""}`}>
        {similar.results !== [] ? (
          similar.results
            .splice(0, 5)
            .map((res, key) => (
              <MovieCard
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