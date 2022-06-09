export interface IMovieData {
  id: number;
  imdb_id: number;

  title: string;
  original_title: string;
  overview: string;
  tagline: string;

  genre_ids: number[];
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
  popularity: number;
  vote_count: number;
  vote_average: number;
}
