import "./Search.css";
import NavBar from "../../components/NavBar/NavBar";
import BookList from "../../components/BookList/BookList";

function Search() {
  return (
    <div className="searchpage">
      <NavBar />
      <BookList />
    </div>
  );
}

export default Search;
