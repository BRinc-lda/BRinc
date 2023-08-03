function BookCoverCard({ books }) {
  return (
    <div className="bookcovercontainer">
      {books.map((book) => (
        <div>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default BookCoverCard;

// books.title

// key={book.title}
