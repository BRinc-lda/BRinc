import { Link } from "react-router-dom";
import "./NavBar.css";
import searchIcon from "../../assets/Searchicon.png";
import { FaBars } from "react-icons/fa";
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
              <img src={searchIcon} alt="Search" className="searchicon" />
            </li>
          </Link>
          <Link to="/login">
            <li> LogIn </li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
        <FaBars className="burger" />
      </div>
    </nav>
  );
}

export default NavBar;
