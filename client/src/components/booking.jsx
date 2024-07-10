import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

const Booking = () => {
  const location = useLocation();
  const { user } = location.state;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          `/api/bookings/${user.user_id}`
        );
        setBookings(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchBookings();
  }, [user.user_id]);

  return (
    <div>
      <Nav user={user} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: '#89c7de' }}>
                <h3 className="card-title mb-0">Booking Details</h3>
              </div>
              <div className="card-body" style={{ backgroundColor: '#a3c8d5' }}>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <div key={booking.id} className="mb-3">
                      <h5 className="card-subtitle">Accommodation: {booking.sr_no}</h5>
                      <p className="card-text">Guest House: {booking.guest_house}</p>
                      <p className="card-text">Room Type: {booking.room_type}</p>
                      <p className="card-text">Check-in Date: {new Date(booking.check_in_date).toLocaleDateString()}</p>
                      <p className="card-text">Check-out Date: {new Date(booking.check_out_date).toLocaleDateString()}</p>
                      <p className="card-text">Relation: {booking.relation}</p>
                      <p className="card-text">Guest Name: {booking.guest_name}</p>
                      <p className="card-text">Number of Rooms: {booking.number_of_rooms}</p>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>You have no bookings.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
};

export default Booking;
