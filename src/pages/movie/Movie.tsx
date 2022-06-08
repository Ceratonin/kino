import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getMovieData } from "../../services/getMovieData";
import Backdrop from "./Backdrop";

const Movie = () => {
  const [backdropImageUrl, setBackdropImageUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getMovieData(64690).then((res) => {
      setBackdropImageUrl(res.backdrop_path);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="movie">
      <Backdrop isLoaded={isLoaded} backdropImageUrl={backdropImageUrl}/>
      <Header movieHeader />
      <div className="content">Drive</div>
    </div>
  );
};

export default Movie;
