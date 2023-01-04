import { useContext } from "react";
import movieDataContext from "../../../contexts/movieDataContext";

const MovieHeader = () => {
  const {
    release_date: releaseDate,
    credits,
    title,
  } = useContext(movieDataContext);

  const getReleaseYear = () => releaseDate.split("-")[0];

  const findDirector = () => {
    const director = credits.crew.find((worker) => worker.job === "Director");

    return director ? director.name : "No Information";
  };

  return (
    <div className="movie_header">
      <div className={`movie_title ${title.length > 25 ? "text-small" : ""}`}>
        {title}
      </div>
      <div className="side_info">
        <p>{getReleaseYear()}</p>
        <div className="movie_shot_by">
          <p>Shot by:&ensp;</p>
          <p>{findDirector()}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
