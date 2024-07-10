import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ user }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile", { state: { user } });
  };

  const handleBookingDetailsClick = () => {
    navigate("/booking", { state: { user } });
  };

  const handleLogoutClick = () => {
    // Perform logout actions (clear session, token, etc.)
    // For example, if using localStorage for token:
    // localStorage.removeItem("token");
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {user.first_name}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" onClick={handleProfileClick}>
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={handleBookingDetailsClick}>
            Booking details
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={handleLogoutClick}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
