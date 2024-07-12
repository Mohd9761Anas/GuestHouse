import React from 'react';

const BookingList = ({ bookings, setCancelBookingId, scrollToCancel }) => {
  return (
    <div className="container mt-5">
      <h3 className="text-center">All Bookings</h3>
      {bookings.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-bordered mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User_id</th>
                <th scope="col">User Name</th>
                <th scope="col">Guest Name</th>
                <th scope="col">Room Type</th>
                <th scope="col">Guest House</th>
                <th scope="col">Relation</th>
                <th scope="col">Check-in</th>
                <th scope="col">Check-out</th>
                <th scope="col">Number of Rooms</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{booking.user_id}</td>
                  <td>{booking.user_name}</td>
                  <td>{booking.guest_name}</td>
                  <td>{booking.room_type}</td>
                  <td>{booking.guest_house}</td>
                  <td>{booking.relation}</td>
                  <td>{new Date(booking.check_in_date).toLocaleDateString()}</td>
                  <td>{new Date(booking.check_out_date).toLocaleDateString()}</td>
                  <td>{booking.number_of_rooms}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        setCancelBookingId(booking.id);
                        scrollToCancel();
                      }}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-4">No bookings available.</p>
      )}
    </div>
  );
};

export default BookingList;
