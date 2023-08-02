import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/homePage/HomePage";
import Search from "./Pages/searchPage/Search";
import About from "./Pages/aboutPage/About";
import RegisterForm from "./Pages/Register Form/RegisterForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
