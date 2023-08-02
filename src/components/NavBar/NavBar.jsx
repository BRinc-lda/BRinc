import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <img src="/src/assets/book light.png" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
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
