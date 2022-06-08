import React from "react";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";

interface IMovieCard {
  posterUrl: string;
  title: string;
}

const MovieCard = ({ posterUrl, title }: IMovieCard) => {
  return (
    <div className="movie-card-wrapper">
      <div className="movie-card-content">
        <img
          src={`${BASE_IMAGE_URL}w220_and_h330_face${posterUrl}`}
          alt={title}
          width={154}
          height={231}
        />
        {/*                            /\    <------------ phtoto image/ original for original size */}
      </div>
    </div>
  );
};

export default MovieCard;
