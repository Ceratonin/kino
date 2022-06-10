import React from "react";
import { IMovieData } from "../../../types/movieData";

interface IMovieInfo {
  movieData: IMovieData;
}

const MovieInfo = ({ movieData }: IMovieInfo) => {
  const toHours = (time: number) => {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
  };

  const parseDate = (date: string) => {
    return new Date(date).toDateString();
  };

  const parseMoney = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="movie-info-container panel-wrapper">
      <span>
        <p>Tagline</p>
        <h4 className="tagline">{movieData.tagline}</h4>
        <hr />
      </span>

      <span>
        <p>Runtime</p>
        <h4>{toHours(movieData.runtime)}</h4>
        <hr />
      </span>

      <span>
        <p>Release Data</p>
        <h4>{parseDate(movieData.release_date)}</h4>
        <hr />
      </span>

      <span>
        <p>Budget</p>
        <h4>${parseMoney(movieData.budget)}</h4>
        <hr />
      </span>

      <span>
        <p>Revenue</p>
        <h4>${parseMoney(movieData.revenue)}</h4>
        <hr />
      </span>

      <span>
        <p>Original Language</p>
        <h4>{movieData.original_language}</h4>
        <hr />
      </span>

      <span>
        <p>Genres</p>
        <div className="genres-array">
          {movieData.genres.map(({ id, name }) => (
            <h4 key={id}>{name}</h4>
          ))}
        </div>
      </span>
    </div>
  );
};

export default MovieInfo;
