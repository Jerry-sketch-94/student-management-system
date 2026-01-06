import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill both fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email!");
      return;
    }

    // ✅ Check against registered user (from Register)
    if (user && user.email === email && user.password === password) {
      alert("Login Successful!");
      navigate("/Staff");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-10 col-sm-6 col-md-4">
        <h1 className="text-center mb-4">Login</h1>

        {/* Email input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control form-control-lg mb-3 rounded-3 bg-light"
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control form-control-lg mb-3 rounded-3 bg-light"
        />

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="btn btn-primary btn-lg w-100 rounded-3"
        >
          Log In
        </button>

        {/* Register link */}
        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
