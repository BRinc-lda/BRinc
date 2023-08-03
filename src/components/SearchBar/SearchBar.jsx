import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [searchBook, setSearchBook] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="searchbar">
      <label htmlFor="search">BRinc Library</label>
      <input
        type="text"
        name="search"
        placeholder="search your favorite book..."
        onChange={(event) => handleChange(event)}
        // value={searchBook}
      />
    </div>
  );
}

export default SearchBar;
