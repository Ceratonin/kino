import React from "react";

function filter() {
  return (
    <div className="container">
      <section className="filter">
        <p>Filter movies:</p>
        <div className="filter__buttons btn-group">
          <button type="button">Year</button>
          <button type="button">Rating</button>
          <button type="button">Genre</button>
        </div>
        <section className="filter__sort">
          <p>Sort by:</p>
          <button type="button">Сортировка</button>
        </section>
        <div className="filter__search">
          <input type="text" placeholder="Find a film" />
        </div>
      </section>
    </div>
  );
}

export default filter;
