import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const obj = useLocation();

  const headerClassName = () => {
    const str = /\/[a-z]+\/?/.exec(obj.pathname);
    let outputStr;
    switch (str && str[0]) {
      case "/home":
        // <----------ADD HERE---------->
        outputStr = "";
        break;

      default:
        outputStr = "special";
    }

    return outputStr ? `header_${outputStr}` : "";
  };

  return (
    <header className={`header ${headerClassName()}`}>
      <div className="container">
        <Link to="/home">
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
