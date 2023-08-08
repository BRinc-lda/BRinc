import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, useParams } from "react-router-dom";
import coverImg from "../../assets/cover_not_found.jpg";
import "./BookInfo.css";

function BookInfo() {
  const [bookDetails, setBookDetails] = useState();
  const { bookId } = useParams();

  // console.log(bookId);

  const getBookDetails = () => {
    axios
      .get(`https://openlibrary.org/works/${bookId}.json`)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          const {
            description,
            title,
            covers,
            subject_places,
            subject_people,
            subject_times,
            subjects,
          } = response.data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_people: subject_people
              ? subject_people.join(", ")
              : "No subject people found",
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBookDetails(newBook);
        } else {
          setBookDetails(null);
        }
      });
  };

  useEffect(() => {
    getBookDetails();
  }, [bookId]);

  return (
    <div className="bookInfoContainer">
      <NavBar />
      {bookDetails ? (
        <div className="bookDetails">
          {" "}
          <div className="coverTitle">
            <h2>{bookDetails.title}</h2>
            <img src={bookDetails.cover_img} alt="Book Cover" />
          </div>
          <div className="infoText">
            <p>{bookDetails.description}</p>
            <h3>Characters</h3>
            <p>{bookDetails.subject_people}</p>
            <h3>Places</h3>
            <p>{bookDetails.subject_places}</p>
            <Link to="/payment">
              <button>Download</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}

export default BookInfo;

// "https://openlibrary.org/works/";
// axios.get(`https://openlibrary.org/works/${bookId}.json`);

// const [searchSingleBook, setSearchSingleBook] = useState();

//   const getSingleBook = () => {
//     axios
//       .get(`http://openlibrary.org/search.json?title=${searchSingleBook}`)
//       .then((response) => {
//         if (response.data.docs){
//             const newBook = response.data.docs.map((singleBook) => {
//                 const {
//                   key,
//                   author_name,
//                   cover_i,
//                   edition_count,
//                   first_publish_year,
//                   title,
//                 } = singleBook;
//                 return {
//                     id: key,
//                     author: author_name,
//                     cover_id: cover_i,
//                     edition_count: edition_count,
//                     first_publish_year: first_publish_year,
//                     title: title,
//         }});
//         }
//       });
//   };

//   useEffect(() => {
//     getSingleBook();
//   }, []);
