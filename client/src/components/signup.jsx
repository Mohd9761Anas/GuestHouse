import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_number: "",
    level: "",
    address: ""
  });

  const { first_name, last_name, email, password, mobile_number, level, address } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://guesthouse-m97w.onrender.com/api/users", formData);
      console.log(res.data);
      alert("Signup successful");
    } catch (err) {
      console.error(err.message);
      alert("Signup failed");
    }
  };

  return (
    <div className="container-fluid login">
      <div className="login-form-container">
        <form
          onSubmit={onSubmit}
          className="container"
          style={{ maxWidth: "600px" }}
        >
          <h2>Signup</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  value={first_name}
                  onChange={onChange}
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  value={last_name}
                  onChange={onChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="mobile_number">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile_number"
                  name="mobile_number"
                  value={mobile_number}
                  onChange={onChange}
                  placeholder="Mobile Number"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="level">Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="level"
                  name="level"
                  value={level}
                  onChange={onChange}
                  placeholder="Level"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  onChange={onChange}
                  placeholder="Address"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary login-button">
            Signup
          </button>
          <p>
            Already a user? <Link className="p-link" to="/login">Login</Link>
          </p>
          <p>
            Are you admin? <Link className="p-link" to="/adminLogin">Admin</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
