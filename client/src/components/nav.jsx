import React , { useRef }  from "react";
import Logo from "./images/ongcLogo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { HashLink as HashRouterLink } from "react-router-hash-link"; // Rename HashLink to HashRouterLink
import Dash from "./dashboard";
import Dropdown from "./dropdown";
import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const Nav = ({ user }) => {
  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-custom" style={{ backgroundColor: '#27506c' }}>
      <div className="container-fluid nav">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" width="40" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" >
                Home
              </a>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <HashRouterLink smooth to="#footer" className="nav-link active">
                Contact
              </HashRouterLink>
            </li>
          </ul>
          <div className="d-flex" role="search">
            {user ? (
              <Dropdown user={user} />
            ) : (
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
