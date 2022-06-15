import "./scss/vendors/bootstrap.scss";
import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Films from "./pages/films/Films";
import Movie from "./pages/movie/Movie";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Films />} />
          <Route path="movie/:id" element={<Movie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
