import React from "react";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";

interface IMovieCard {
  posterUrl: string;
  title: string;
}

function MovieCard({ posterUrl, title }: IMovieCard) {
  return (
    <div>
      <img src={`${BASE_IMAGE_URL}w154${posterUrl}`} alt={title} />
    </div>
  );
}

export default MovieCard;
