import { Link } from "react-router-dom";
import "./NavBar.css";
import { FiSearch } from "react-icons/fi";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src="/src/assets/logo light color2.png" className="img" />
        </Link>
        <ul>
          <Link to="/search">
            <li>
              <FiSearch className="searchicon" />
            </li>
          </Link>
          <Link to="/login">
            <li> LogIn </li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
