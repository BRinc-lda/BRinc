import "./Register.css";
import NavBar from "../../components/NavBar/NavBar";

function RegisterForm() {
  return (
    <div className="backgroundContainer">
      <NavBar />
      <div className="registerLoginForm">
        <div className="registerForm hidden">
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            className="inputForm"
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            className="inputForm"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="inputForm"
          />

          <input
            type="password"
            placeholder="New Password"
            id="newPassword"
            className="inputForm"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className="inputForm"
          />
          <button className="btn btnRegister" type="submit">
            Register
          </button>
          <p>
            Already have an account? <a href="">Login</a>
          </p>
        </div>

        <div className="loginForm ">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="inputForm"
          />

          <input
            type="password"
            placeholder="New Password"
            id="newPassword"
            className="inputForm"
          />
          <button className="btn btnLogin" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
