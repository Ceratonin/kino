import React from "react";
import { IMovieData } from "../../../types/movieData";

interface IMovieHeader {
  movieData: IMovieData;
}

const MovieHeader = ({ movieData }: IMovieHeader) => {
  const getReleaseYear = () => movieData.release_date.split("-")[0];
  return (
    <div className="movie_header">
      <div className="movie_title">{movieData.title}</div>
      <div className="movie_release_date">{getReleaseYear()}</div>
      <div className="movie_shot_by">
        <p>Shot by:</p>
        <div className="movie_director">Director</div>
      </div>
    </div>
  );
};

export default MovieHeader;
