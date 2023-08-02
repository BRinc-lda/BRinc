import "./Search.css";
import NavBar from "../../components/NavBar/NavBar";

function Search() {
  return (
    <div className="searchpage">
      <NavBar />
      <div className="searchbar">
        <label htmlFor="search">Search for your favourite book</label>
        <input
          type="text"
          name="search"
          placeholder="search your favorite book..."
        />
      </div>
    </div>
  );
}

export default Search;
