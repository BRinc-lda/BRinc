import "./LogIn.css";

function LogIn() {
  return (
    <div className="registerLoginForm">
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
  );
}

export default LogIn;
