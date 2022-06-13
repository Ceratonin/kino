import React from "react";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";

interface IMovieCard {
  posterUrl: string;
  title: string;
  imageSize: string;
  link?: string;
  containerSize: {
    height: number;
    width: number;
  };
}

const MovieCard = ({
  posterUrl,
  title,
  imageSize,
  containerSize,
  link,
}: IMovieCard) => (
  <div className="movie-card-wrapper">
    <div className="movie-card-content">
      <img
        src={`${BASE_IMAGE_URL}${imageSize}${posterUrl}`}
        alt={title}
        width={containerSize.width}
        height={containerSize.height}
      />
      {link && (
        <a href="https://letterboxd.com/ceratonin/watchlist/page/2/">
          <span></span>
        </a>
      )}
    </div>
  </div>
);

export default MovieCard;
