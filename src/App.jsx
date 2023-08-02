import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import Search from "./pages/searchPage/Search";
import About from "./pages/aboutPage/About";
import RegisterForm from "./Pages/Register Form/RegisterForm";
function App() {
  return (
    <>
      <RegisterForm />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
