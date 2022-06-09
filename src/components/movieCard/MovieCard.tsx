import React from "react";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";

interface IMovieCard {
  posterUrl: string;
  title: string;
  imageSize: string;
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
}: IMovieCard) => (
  <div className="movie-card-wrapper">
    <div className="movie-card-content">
      {/*                            \/    <------------ photo image/ original for original size */}
      <img
        src={`${BASE_IMAGE_URL}${imageSize}${posterUrl}`}
        alt={title}
        width={containerSize.width}
        height={containerSize.height}
      />
    </div>
  </div>
);

export default MovieCard;
