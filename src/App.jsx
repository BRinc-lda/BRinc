<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import Search from "./pages/search/Search";
import About from "./pages/about/About";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
=======
import RegisterForm from "./pages/Register Form/Register";

function App() {
  return (
    <>
      <RegisterForm />
>>>>>>> 5f3ea3af0ab88ec326651c8592479ff545985a96
    </>
  );
}

export default App;
