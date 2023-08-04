import defaultCover from "../../assets/cover_not_found.jpg";

function BookCoverCard({ book }) {
  const bookWithCover = {
    ...book,
    cover_img: book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
      : defaultCover,
  };

  return (
    <div className="bookcovercontainer">
      <div>
        <h3>{bookWithCover.title}</h3>
        <img src={bookWithCover.cover_img} alt={bookWithCover.title} />
        {/* <p>{bookWithCover.author}</p> */}
      </div>
    </div>
  );
}

export default BookCoverCard;
