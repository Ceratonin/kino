import React from "react";

interface IMovieHeader {
  movieData: {
    release_date: string;
    title: string;
    credits: {
      crew: {
        job: string;
        name: string;
      }[];
    };
  };
}

const MovieHeader = ({ movieData }: IMovieHeader) => {
  const getReleaseYear = () => movieData.release_date.split("-")[0];

  const findDirector = () => {
    const director = movieData.credits.crew.find(
      (worker) => worker.job === "Director"
    );

    return director ? director.name : "No Information";
  };

  return (
    <div className="movie_header">
      <div className="movie_title">{movieData.title}</div>
      <div className="movie_release_date">{getReleaseYear()}</div>
      <div className="movie_shot_by">
        <p>Shot by:</p>
        <div className="movie_director">{findDirector()}</div>
      </div>
    </div>
  );
};

export default MovieHeader;
