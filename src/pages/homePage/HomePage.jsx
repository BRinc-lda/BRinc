import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "./HomePage.css";
import FavoriteBooks from "../../components/FavoriteBooks/FavoriteBooks";
function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <h2 className="brincLibrary">
        BRinc<span>Library</span>
      </h2>
      <div className="btncontainer">
        <Link to="register">
          <button className="regbutton">Register Now</button>
        </Link>
      </div>
      <FavoriteBooks />
    </div>
  );
}

export default HomePage;
