export const movieDataObj = {
  id: "", // -1
  imdb_id: "", // -1

  title: "",
  original_title: "",
  overview: "",
  tagline: "",

  genres: [{ id: -1, name: "" }],
  release_date: "",
  adult: false,
  budget: 0,
  revenue: 0,
  runtime: 0,

  poster_path: "",
  backdrop_path: "",
  video: false,
  videos: { results: [{ key: "", site: "" }] },
  images: {
    backdrops: [{ file_path: "" }],
    logos: [],
    posters: [{ file_path: "" }],
  },

  credits: {
    cast: [{ name: "", character: "", profile_path: "" }],
    crew: [{ job: "", name: "" }],
  },
  reviews: {
    results: [
      {
        author_details: {
          username: "",
          avatar_path: "",
          rating: 0,
        },
        author: "",
        id: "",
        content: "",
      },
    ],
  },

  original_language: "",

  recommendations: { results: [{ title: "", poster_path: "" }] },
  media_type: "",
  popularity: "", // -1
  vote_count: "", // -1
  vote_average: "", // -1
};
