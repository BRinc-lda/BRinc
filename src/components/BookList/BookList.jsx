import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
// import BookCoverCard from "../BookCoverCard/BookCoverCard";

function BookList() {
  const [books, setBooks] = useState();
  const [searchBook, setSearchBook] = useState("");

  const handleChange = (event) => {
    setSearchBook(event.target.value);
  };

  const getBook = () => {
    axios
      .get(`http://openlibrary.org/search.json?title=${searchBook}`)
      .then((response) => console.log(response.data.docs));
  };
  useEffect(() => {
    getBook();
  }, [searchBook]);
  return (
    <>
      <SearchBar handleChange={handleChange} searchBook={searchBook} />
      {/* <BookCoverCard books={books} /> */}
      {/* <button onClick={getBook}>Get Book</button> */}
    </>
  );
}

export default BookList;
