import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // ✅ check if any field is empty
    if (!name || !email || !phone || !password) {
      alert("Please fill all fields before submitting!");
      return;
    }

    // ✅ Save user data (to parent App.js state)
    setUser({ name, email, phone, password });

    alert("Registered Successfully ✅");

    // ✅ redirect to login page
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Register</h2>

        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input
            id="Name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email</label>
          <input
            type="email"
            id="Email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Set Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
