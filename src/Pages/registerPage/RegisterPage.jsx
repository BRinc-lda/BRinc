import NavBar from "../../components/NavBar/NavBar";
import RegForm from "../../components/RegisterForm/RegForm";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="registerpage">
      <NavBar />
      <RegForm />
    </div>
  );
}

export default RegisterPage;
