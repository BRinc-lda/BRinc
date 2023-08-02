import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import Search from "./pages/search/Search";
import About from "./pages/about/About";

import RegisterForm from "./pages/Register Form/Register";

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
