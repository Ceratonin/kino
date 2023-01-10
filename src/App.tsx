import "./scss/vendors/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/MainPage";
import Films from "./pages/films/FilmsPage";
import Movie from "./pages/movie/MoviePage";
import ErrorPage from "./pages/error/ErrorPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<Films />} />
        <Route path="/" element={<Films />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
