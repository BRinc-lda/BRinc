import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

function BookList() {
  const [book, setBook] = useState();

  const getBook = () => {
    axios
      .get("http://openlibrary.org/search.json?title=lord+of+the+rings")
      .then((response) => console.log(response));
  };
  return (
    <>
      <SearchBar />
      <button onClick={getBook}>Get Book</button>
    </>
  );
}

export default BookList;
