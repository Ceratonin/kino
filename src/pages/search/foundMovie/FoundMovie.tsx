import { TMovieData } from "types/movieData";

interface IMovieData {
  data: TMovieData;
}

const FoundMovie = ({ data }: IMovieData) => {
  return <div>{data.title}</div>;
};

export default FoundMovie;
