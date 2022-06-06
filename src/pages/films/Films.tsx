import React from "react";
import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";

function Films() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Films;
