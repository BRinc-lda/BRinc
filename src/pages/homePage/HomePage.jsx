import BookList from "../../components/BookList/BookList";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <BookList />
      <div className="btncontainer">
        <Link to="register">
          <button className="regbutton">Register Now</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
