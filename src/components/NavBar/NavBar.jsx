import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src="/src/assets/book light.png" className="img" />
        </Link>
        <ul>
          <Link to="/search">
            <li>Search</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/register">
            <li>Register / LogIn </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
