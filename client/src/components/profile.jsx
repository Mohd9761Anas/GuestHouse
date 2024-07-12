import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import axios from "axios";

const Profile = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const location = useLocation();
  const { user } = location.state;

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://guesthouse-m97w.onrender.com/api/users/${user.user_id}`, formData);
      console.log(res.data);
      alert("Profile updated successfully");
      // Update the user state with the new data
      setFormData(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error(err.message);
      alert("Profile update failed");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <Nav user={user} scrollToFooter={scrollToFooter} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: '89c7de' }}>
                <h3 className="card-title mb-0">Profile Details</h3>
              </div>
              <div className="card-body" style={{ backgroundColor: '#a3c8d5'}}>
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Level</label>
                      <input
                        type="text"
                        className="form-control"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                  </form>
                ) : (
                  <>
                    <div className="mb-3">
                      <h5 className="card-subtitle">First Name</h5>
                      <p className="card-text">{formData.first_name}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="card-subtitle">Last Name</h5>
                      <p className="card-text">{formData.last_name}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="card-subtitle">Email</h5>
                      <p className="card-text">{formData.email}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="card-subtitle">Mobile Number</h5>
                      <p className="card-text">{formData.mobile_number}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="card-subtitle">Level</h5>
                      <p className="card-text">{formData.level}</p>
                    </div>
                    <div className="mb-3">
                      <h5 className="card-subtitle">Address</h5>
                      <p className="card-text">{formData.address}</p>
                    </div>
                    <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer id="footer" ref={footerRef}/>
    </div>
  );
};

export default Profile;
