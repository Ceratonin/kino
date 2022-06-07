import React from "react";

interface IMovieCard {
  posterUrl: string;
  title: string;
}

function MovieCard({ posterUrl, title }: IMovieCard) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w154${posterUrl}`} alt={title} />
    </div>
  );
}

export default MovieCard;
