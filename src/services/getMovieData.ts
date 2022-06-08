import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/baseUrl";

// Link Example
// "https://api.themoviedb.org/3/movie/64690?api_key=062ca84ac8ddb2a2b936cf364046f2f9&language=en-US"

export const getMovieData = async (movieID:number) => {
  const url = `${BASE_URL}movie/${movieID}`

  const movieData = await axios
    .get(url, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return movieData;
};
