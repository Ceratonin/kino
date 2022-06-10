export interface IMovieData {
  id: number | string;
  imdb_id: number | string;

  title: string;
  original_title: string;
  overview: string;
  tagline: string;

  genres: { id: number; name: string }[];
  release_date: string;
  adult: boolean;
  budget: number;
  revenue: number;
  runtime: number;

  poster_path: string;
  backdrop_path: string;
  video: boolean;

  original_language: string;

  media_type: string;
  popularity: number | string;
  vote_count: number | string;
  vote_average: number | string;
}
