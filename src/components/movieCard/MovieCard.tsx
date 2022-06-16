import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";

interface IMovieCard {
  posterUrl: string;
  title: string;
  imageSize: string;
  id: string;
  notLink?: boolean;
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
  id,
  notLink,
}: IMovieCard) => (
  <div className="movie-card-wrapper">
    <div className="movie-card-content">
      {!notLink ? (
        <Link to={`/movie/${id}`}>
          <img
            src={`${BASE_IMAGE_URL}${imageSize}${posterUrl}`}
            alt={title}
            width={containerSize.width}
            height={containerSize.height}
          />
        </Link>
      ) : (
        <img
          src={`${BASE_IMAGE_URL}${imageSize}${posterUrl}`}
          alt={title}
          width={containerSize.width}
          height={containerSize.height}
        />
      )}
    </div>
  </div>
);

export default MovieCard;
