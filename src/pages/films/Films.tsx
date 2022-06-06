import React from "react";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/Header";

function Films() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Films;
