function RegisterForm() {
  return (
    <div className="registerLoginForm">
      <div className="registerForm">
        <input type="text" placeholder="First Name" id="firstName" />
        <input type="text" placeholder="Last Name" id="lastName" />
        <input type="email" placeholder="Email" id="email" />

        <input type="password" placeholder="New Password" id="newPassword" />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
        />
        <button className="btn btnRegister" type="submit">
          Register
        </button>
        <p>
          Already have an account? <a href="">Login</a>
        </p>
      </div>

      <div className="login hidden">
        <input type="email" placeholder="Email" id="email" />

        <input type="password" placeholder="New Password" id="newPassword" />
      </div>
    </div>
  );
}

export default RegisterForm;
