import React from "react";
import { IMovieData } from "../../../types/movieData";

interface IMovieInfo {
  movieData: IMovieData;
}

const MovieInfo = ({ movieData }: IMovieInfo) => {
  const toHours = () => {
    const hours = Math.trunc(movieData.runtime / 60);
    const minutes = movieData.runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const parseDate = () => {
    return new Date(movieData.release_date).toDateString();
  };

  const parseMoney = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const movieInfoArr = new Map<
    string,
    string | number | { id: number; name: string }[]
  >([
    ["Tagline", movieData.tagline],
    ["Runtime", movieData.runtime && toHours()],
    ["ReleaseDate", movieData.release_date && parseDate()],
    ["Budget", movieData.budget && `$${parseMoney(movieData.budget)}`],
    ["Revenue", movieData.revenue && `$${parseMoney(movieData.revenue)}`],
    ["OriginalLangueage", movieData.original_language],
    ["Genres", movieData.genres],
  ]);

  return (
    <div className="movie-info-container panel-wrapper">
      {[...movieInfoArr].map(([key, value]) => (
        <span key={key}>
          <p>{key}</p>
          {key === "Genres" ? (
            <div className="genres-array">
              {movieData.genres.map(({ id, name }) => (
                <h4 key={id}>{name}</h4>
              ))}
            </div>
          ) : (
            <h4>{typeof value === "object" || value || "No Information"}</h4>
          )}
          <hr />
        </span>
      ))}
    </div>
  );
};

export default MovieInfo;
