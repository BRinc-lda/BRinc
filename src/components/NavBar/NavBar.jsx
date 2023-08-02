import { Link } from "react-router-dom";

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
            <li>Register Here</li>
          </Link>
        </ul>

        <div>NavBar</div>
      </div>
    </nav>
  );
}

export default NavBar;
