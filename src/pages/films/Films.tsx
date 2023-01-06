import Filter from "components/filter/Filter";
import MovieList from "components/movieList/MovieList";

const Films = () => {
  return (
    <div className="container">
      <Filter />
      <MovieList />
    </div>
  );
};

export default Films;
