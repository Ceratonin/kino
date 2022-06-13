import "./scss/vendors/bootstrap.scss";
import "./scss/main.scss";
import Main from "./pages/main/Main";
import Films from "./pages/films/Films";
import Movie from "./pages/movie/Movie";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <div className="App">
      <ErrorPage />
    </div>
  );
}
export default App;
