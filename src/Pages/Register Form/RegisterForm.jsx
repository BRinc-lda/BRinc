import "./Register.css";

function RegisterForm() {
  return (
    <div className="registerLoginForm">
      <div className="registerForm">
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

      <div className="login hidden">
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
      </div>
    </div>
  );
}

export default RegisterForm;
