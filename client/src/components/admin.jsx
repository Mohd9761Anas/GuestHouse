import React, { useState, useEffect,  useRef } from 'react';
import axios from 'axios';
import Nav from './nav';
import Footer from './footer';
import AccommodationTable from './accomadations';
import BookingList from './bookingList';
import CancelBookingForm from './cancelBooking'; // Import the new CancelBookingForm component
import UserTable from './users';
import AvailabilityTable from './availability';
import { Link, useNavigate } from 'react-router-dom';
const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [cancelBookingId, setCancelBookingId] = useState('');
  const footerRef = useRef(null);
  const cancelRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCancel = () => {
    cancelRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('https://guesthouse-m97w.onrender.com/api/bookings');
        setBookings(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchAccommodations = async () => {
      try {
        const res = await axios.get('https://guesthouse-m97w.onrender.com/api/accommodations');
        setAccommodations(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchBookings();
    fetchAccommodations();
  }, []);

  const onCancelBooking = async (bookingId, reason) => {
    try {
      const cancelData = {
        booking_id: bookingId,
        reason: reason
      };

      const res = await axios.post('https://guesthouse-m97w.onrender.com/api/cancellations', cancelData);
      alert('Booking cancelled successfully');

      // Update bookings state
      const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
      setBookings(updatedBookings);
    } catch (err) {
      console.error(err.message);
      alert('Failed to cancel booking');
    }
  };

  return (
    <div>
      <Nav scrollToFooter={scrollToFooter}/>
      <UserTable />
      <BookingList bookings={bookings} setCancelBookingId={setCancelBookingId} scrollToCancel={scrollToCancel}/>
      <AccommodationTable accommodations={accommodations} />
      <AvailabilityTable />
      <CancelBookingForm 
        cancelBookingId={cancelBookingId}
        setCancelBookingId={setCancelBookingId}
        onCancelBooking={onCancelBooking} 
        ref={cancelRef}
      />
      <Footer id="footer" ref={footerRef}/>
    </div>
  );
};

export default Admin;
