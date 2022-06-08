import React from "react";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";

interface IMovieCard {
  posterUrl: string;
  title: string;
}

function MovieCard({ posterUrl, title }: IMovieCard) {
  return (
    <div className="movie-card-wrapper">
      <div className="movie-card-content">
        <img src={`${BASE_IMAGE_URL}w154${posterUrl}`} alt={title} />
      </div>
    </div>
  );
}

export default MovieCard;
