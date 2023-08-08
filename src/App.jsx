import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage";
import Search from "./Pages/searchPage/Search";
import About from "./Pages/aboutPage/About";
import LogInForm from "./Pages/logInPage/LogInForm";
import RegisterPage from "./Pages/registerPage/RegisterPage";
import Payment from "./Pages/payment page/Payment";
import PaymentDone from "./Pages/payment page/PaymentDone";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentDone" element={<PaymentDone />} />
      </Routes>
    </>
  );
}

export default App;
