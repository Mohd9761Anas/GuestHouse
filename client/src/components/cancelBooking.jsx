import React, { useState, useEffect } from 'react';


const CancelBookingForm = ({ cancelBookingId, setCancelBookingId, onCancelBooking }) => {
  const [cancelReason, setCancelReason] = useState('');

  useEffect(() => {
    // Clear the cancel reason when the booking ID changes
    setCancelReason('');
  }, [cancelBookingId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCancelBooking(cancelBookingId, cancelReason);
    setCancelBookingId('');
  };

  return (
    <div className="container mt-5">
      <h3>Cancel Booking</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Booking ID:</label>
          <input 
            type="number" 
            className="form-control" 
            value={cancelBookingId} 
            onChange={(e) => setCancelBookingId(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <textarea 
            className="form-control" 
            value={cancelReason} 
            onChange={(e) => setCancelReason(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Cancel Booking</button>
      </form>
    </div>
  );
};

export default CancelBookingForm;
