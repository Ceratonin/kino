import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "./navbar.scss";

function Navbar() {
  const [logged, setLogged] = useState(false);

  const handleLogin = () => {
    setLogged((event) => !event);
  };

  return !logged ? (
    <div className="header__buttons">
      <button onClick={handleLogin} type="button">
        Log in
      </button>
      <button type="button">Create account</button>
      <button type="button">Films</button>
    </div>
  ) : (
    <div className="header__buttons">
      <div className="header__profile dropdown">
        <div
          className="dropdown-toggle"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-user" />
          <button type="button">You</button>
        </div>

        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <span className="dropdown-item">Profile</span>
          </li>
          <li>
            <span className="dropdown-item">My Films</span>
          </li>
          <li>
            <span className="dropdown-item">Diary</span>
          </li>
          <li>
            <span className="dropdown-item">Watchlist</span>
          </li>
          <hr />
          <li>
            <span className="dropdown-item">Settings</span>
          </li>
        </ul>
      </div>
      <button type="button">Watchlist</button>
      <button type="button">Films</button>
      <button type="button" className="header__log">
        Log
      </button>
    </div>
  );
}

export default Navbar;
