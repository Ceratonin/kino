type id = string;
type imdb_id = number | string;

type name = string;

type overview = string;
type tagline = string;
type adult = boolean;

type genres = { id: number; name: string }[];
type budget = number;
type revenue = number;
type runtime = number;

type poster_path = string;
type backdrop_path = string;
type video = boolean;
type videos = { results: { key: string; site: string }[] };
type images = {
  backdrops: { file_path: string }[];
  logos: {}[];
  posters: { file_path: string }[];
};

type credits = {
  cast: { name: string; character: string; profile_path: string }[];
  crew: { job: string; name: string }[];
};

type original_language = string;

type reviews = {
  results: {
    author_details: {
      username: string;
      avatar_path: string;
      rating: number;
    };
    author: string;
    id: string;
    content: string;
  }[];
};
type recommendations = {
  results: { title: string; poster_path: string; id: string }[];
};
type media_type = "movie" | "tv" | "person";
type popularity = number | string;
type vote_count = number | string;
type vote_average = number | string;

// MOVIES ONLY
type title = string;
type original_title = string;
type release_date = string;

// TV SHOWS ONLY
type origin_country = string[];
type first_air_date = string;
type original_name = string;

// MIXED
export type TReviewsData = {
  reviews: reviews;
};

export type TMovieList = { id: id; poster_path: poster_path; title: title };

export type TMovieData = {
  poster_path: poster_path;
  adult: adult;
  overview: overview;
  release_date: release_date;
  original_title: original_title;
  genres: genres;
  id: id;
  media_type: media_type;
  original_language: original_language;
  title: title;
  backdrop_path: backdrop_path;
  popularity: popularity;
  vote_count: vote_count;
  video: video;
  vote_average: vote_average;
};

export type TTvShowData = {
  poster_path: poster_path;
  popularity: popularity;
  id: id;
  overview: overview;
  backdrop_path: backdrop_path;
  vote_average: vote_average;
  media_type: media_type;
  first_air_date: first_air_date;
  origin_country: origin_country;
  genres: genres;
  original_language: original_language;
  vote_count: vote_count;
  name: name;
  original_name: original_name;
};

export type TPersonData = {
  poster_path: poster_path;
  adult: adult;
  id: id;
  media_type: media_type;
  known_for: TMovieData | TTvShowData;
  name: name;
  popularity: popularity;
};

export type TSearchedData = {
  results: (TMovieData & TTvShowData & TPersonData)[];
  totalPages: number;
  totalResult: number;
};
