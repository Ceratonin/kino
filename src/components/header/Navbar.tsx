import React, { Fragment, useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import { headerProfileValues } from "../../constants/dropdownValues";
import "bootstrap/dist/js/bootstrap.bundle";

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
      <div className="header__profile">
        <Dropdown items={headerProfileValues}>
          <Fragment>
            <i className="fa-solid fa-user" />
            <span>You</span>
          </Fragment>
        </Dropdown>
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
