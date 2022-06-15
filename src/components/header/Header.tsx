import Navbar from "./Navbar";

interface IHeader {
  movieHeader?: boolean;
}

const Header = ({ movieHeader }: IHeader) => {
  return (
    <header className={`header ${movieHeader ? "movie" : ""}`}>
      <div className="container">
        <a href="/">
          <div className="header__title">KINO</div>
        </a>
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
