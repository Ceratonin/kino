// import axios from "axios";
// import { API_KEY } from "../constants/apiKey";
// import { BASE_URL } from "../constants/baseUrl";

// // Link Example
// // "https://image.tmdb.org/t/p/w154/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg"

// export const getMoviePoster = async (movieTitle: string) => {
//   const url = "".concat(BASE_URL, "search/movie");

//   const posterFileName = await axios
//     .get(url, {
//       params: {
//         api_key: API_KEY,
//         query: movieTitle,
//       },
//     })
//     .then((res) => res.data.results[0].poster_path)
//     .catch((err) => console.error(err));

//   return posterFileName;
// };

export default {}