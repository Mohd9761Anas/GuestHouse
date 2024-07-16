import React , { useRef}  from "react";
import Nav from "./nav";
import Footer from "./footer";
import { useLocation } from 'react-router-dom';
const About=()=>{
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const location = useLocation();
  const { prop, user } = location.state || {};
    return(
        <div>
        <Nav user={user} scrollToFooter={scrollToFooter}/>
        <div className="container mt-5">
        <h1>About ONGC Guest House Booking Portal</h1>
        <p>
          Welcome to the ONGC Guest House Booking Portal. This platform is designed exclusively for ONGC employees and their guests to facilitate seamless booking of guest house accommodations. ONGC, a public sector unit, strives to provide top-notch facilities for its employees and esteemed guests.
        </p>
        <h2>Purpose</h2>
        <p>
          The primary aim of this portal is to simplify the process of booking rooms at ONGC guest houses. Whether you are an employee looking to book a room for yourself or a guest of ONGC, our portal offers an easy-to-use interface to manage your accommodation needs.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Browse available accommodations and check room availability in real-time.</li>
          <li>Book rooms quickly and efficiently with user-friendly forms.</li>
          <li>Manage your bookings and view your booking history.</li>
          <li>Exclusive access for ONGC employees and their guests.</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please contact our support team through the contact details provided below.
        </p>
        
      </div>
        <Footer id="footer" ref={footerRef}/>
      </div>
    )
}
export default About;
