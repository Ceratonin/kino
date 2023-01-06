import { createContext } from "react";
import { movieDataObj } from "constants/movieDataObj";

const movieDataContext = createContext(movieDataObj);

export default movieDataContext;
