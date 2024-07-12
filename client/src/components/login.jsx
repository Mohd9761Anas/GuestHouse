import React, { useState } from 'react';
import axios from 'axios';
import Dash from './dashboard';
import {  Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [user, setUser] = useState(null);

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const navigate = useNavigate();
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://guesthouse-m97w.onrender.com/api/login', formData);
      setUser(res.data.user);
      alert('Login successful');
      navigate('/dashboard', { state: { user: res.data.user } });
    } catch (err) {
      console.error(err.message);
      alert('Login failed');
    }
  };

  // if (user) {
  //   return <Dash user={user} />;
  // }

  return (
    <div className="container-fluid login">
      <div className="login-form-container">
        <form onSubmit={onSubmit}>
          <h2>Login</h2>
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
          <button type="submit" className="btn btn-primary btn-block login-button">Login</button>
          <p className="mt-3">Don't have an account? <Link className="p-link" to="/signup">Sign up</Link></p>
        <p >Are you an admin? <Link className="p-link" to="/adminLogin">Admin</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
