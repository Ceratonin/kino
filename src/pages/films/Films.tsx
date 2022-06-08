import React from "react";
import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";
import MovieList from "../../components/movieList/MovieList";

const Films = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Filter />
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default Films;
