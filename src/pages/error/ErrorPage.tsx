import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { BASE_IMAGE_URL } from "../../constants/baseUrl";
import { getMovieData } from "../../services/getMovieData";

const ErrorPage = () => {
  const [movieData, setMovieData] = useState({
    backdrop_path: "",
    title: "",
    release_date: "",
  });

  useEffect(() => {
    getMovieData(64690).then((res) => {
      setMovieData(res);
    });
  }, []);

  const dateToYear = () => {
    console.log(movieData.release_date)
    return new Date(movieData.release_date).getFullYear()
  }

  return (
    <div className="error-page">
      <Header movieHeader />
      <img
        src={`${BASE_IMAGE_URL}original${movieData.backdrop_path}`}
        alt="err"
        className="backdrop"
      />
      <span className="error-message">
        <p className="container">Page Not Found!</p>
      </span>
      <span className="movie-title">
        <p>{movieData.title}</p>
        <p>{dateToYear()}</p>
      </span>
    </div>
  );
};

export default ErrorPage;
