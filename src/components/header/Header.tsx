import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">KINO</div>
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
}

export default Header;
