import { TMovieHeader } from "../../../types/movieData";

const MovieHeader = ({
  release_date: ReleaseDate,
  credits,
  title,
}:TMovieHeader) => {
  const getReleaseYear = () => ReleaseDate.split("-")[0];

  const findDirector = () => {
    const director = credits.crew.find((worker) => worker.job === "Director");

    return director ? director.name : "No Information";
  };

  return (
    <div className="movie_header">
      <div className="movie_title">{title}</div>
      <div className="movie_release_date">{getReleaseYear()}</div>
      <div className="movie_shot_by">
        <p>Shot by:</p>
        <div className="movie_director">{findDirector()}</div>
      </div>
    </div>
  );
};

export default MovieHeader;
