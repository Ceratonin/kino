import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/baseUrl";

// Link Example
// "https://api.themoviedb.org/3/trending/movie/week?api_key=062ca84ac8ddb2a2b936cf364046f2f9"

export const getPopularMovies = async (pageId: number) => {
  const url = `${BASE_URL}trending/movie/week`;

  const popularMovieData = await axios
    .get(url, {
      params: {
        api_key: API_KEY,
        page: pageId,
      },
    })
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
  return popularMovieData;
};
