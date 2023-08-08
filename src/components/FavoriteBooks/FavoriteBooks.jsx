import "./FavoriteBooks.css";
import { Link } from "react-router-dom";
import bookFour from "../../assets/harryPotterCover.jpeg";
import bookThree from "../../assets/lordOfTheRingsCover.jpeg";
import bookTwo from "../../assets/hungerGamesCover.jpeg";
import bookOne from "../../assets/theHobbitCover.jpeg";
function FavoriteBooks() {
  return (
    <>
      <h3 className="favTitle">Most Downloaded Books</h3>;
      <div className="favoriteContainer">
        <Link to="/bookinfo/OL262758W">
          <img src={bookOne} className="book-one" alt="Some Book Cover" />
        </Link>

        <Link to="/bookinfo/OL5735363W">
          <img src={bookTwo} className="book-two" alt="Some Book Cover" />
        </Link>

        <Link to="/bookinfo/OL27448W">
          <img src={bookThree} className="book-three" alt="Some Book Cover" />
        </Link>

        <Link to="/bookinfo/OL82586W">
          <img src={bookFour} className="book-four" alt="Some Book Cover" />
        </Link>
      </div>
    </>
  );
}

export default FavoriteBooks;
