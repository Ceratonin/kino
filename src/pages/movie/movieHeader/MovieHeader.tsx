import React from "react";
import { TMovieHeader } from "../../../types/movieData";

const MovieHeader = ({
  release_date: ReleaseDate,
  credits,
  title,
}: TMovieHeader) => {
  const getReleaseYear = () => ReleaseDate.split("-")[0];

  const findDirector = () => {
    const director = credits.crew.find((worker) => worker.job === "Director");

    return director ? director.name : "No Information";
  };

  return (
    <div className="movie_header">
      <div className="movie_title">{title}</div>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
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
