import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const obj = useLocation();

  const movieHeader = () => {
    return /\/movie\/*/.test(obj.pathname);
  };

  return (
    <header className={`header ${movieHeader() && "movie"}`}>
      <div className="container">
        <Link to="/">
          <div className="header__title">KINO</div>
        </Link>
        <div className="header__content">
          <Navbar />

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
