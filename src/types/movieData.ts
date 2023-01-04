type id = string;
type imdb_id = number | string;

type title = string;
type original_title = string;
type overview = string;
type tagline = string;

type genres = { id: number; name: string }[];
type release_date = string;
type adult = boolean;
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
type media_type = string;
type popularity = number | string;
type vote_count = number | string;
type vote_average = number | string;

export type TReviewsData = {
  reviews: reviews;
};

export type TMovieList = { id: id; poster_path: poster_path; title: title };
