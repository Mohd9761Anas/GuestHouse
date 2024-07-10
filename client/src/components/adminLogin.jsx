import React, { useState } from "react";
import axios from "axios";
import Admin from "./admin";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/admin/login`,
        formData
      );
      setUser(res.data.user);
      alert("Login successful");
    } catch (err) {
      console.error(err.message);
      alert("Login failed");
    }
  };

  if (user) {
    return <Admin />;
  }

  return (
    <div className="container-fluid login">
      <div className="login-form-container">
        <form onSubmit={onSubmit}>
          <h2>Admin Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <p>Already a user? <Link className="p-link" to="/login">Login</Link></p>
          <p>Want to sign up? <Link className="p-link" to="/signup">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
