import BookList from "../../components/BookList/BookList";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <BookList />
    </div>
  );
}

export default HomePage;
