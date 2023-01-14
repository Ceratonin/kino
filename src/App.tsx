import "./scss/vendors/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import SearchPage from "pages/search/SearchPage";
import FilmsPage from "./pages/films/FilmsPage";
import MoviePage from "./pages/movie/MoviePage";
import ErrorPage from "./pages/error/ErrorPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<FilmsPage />} />
        <Route path="/" element={<FilmsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
