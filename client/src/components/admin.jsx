import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './nav';
import Footer from './footer';
import AccommodationTable from './accomadations';
import BookingList from './bookingList';
import CancelBookingForm from './cancelBooking'; // Import the new CancelBookingForm component
import UserTable from './users';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [cancelBookingId, setCancelBookingId] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`/api/bookings`);
        setBookings(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchAccommodations = async () => {
      try {
        const res = await axios.get(`/api/accommodations`);
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

      const res = await axios.post(`/api/cancellations`, cancelData);
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
      <Nav />
      <UserTable />
      <BookingList bookings={bookings} setCancelBookingId={setCancelBookingId} />
      <AccommodationTable accommodations={accommodations} />
      <CancelBookingForm 
        cancelBookingId={cancelBookingId}
        setCancelBookingId={setCancelBookingId}
        onCancelBooking={onCancelBooking} 
      />
      <Footer id="footer" />
    </div>
  );
};

export default Admin;
