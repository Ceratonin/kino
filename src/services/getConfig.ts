import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/baseUrl";

// Link Example
// "https://api.themoviedb.org/3/configuration?"

export const getConfig = async () => {
  const url = "".concat(BASE_URL, "configuration?a");

  axios
    .get(url, {
      params: { api_key: API_KEY },
    })
    .then((res) => {
      // moviePosterSearch("Drive");
      console.log(res.data);
    })
    .catch((err) => console.error(err));
};
