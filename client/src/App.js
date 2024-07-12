import React from 'react';
import Signup from './components/signup';
import Login from './components/login';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/admin';
import AdminLogin from './components/adminLogin';
import Home from './components/home';
import Profile from './components/profile';
import Booking from './components/booking';
import About from './components/about';
import Dash from './components/dashboard';

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      
        
          {/* <Route exact path="/" element={<Login/>} /> */}
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route  path="/adminLogin" element={<AdminLogin/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
