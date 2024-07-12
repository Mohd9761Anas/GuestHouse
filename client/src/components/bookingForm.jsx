// import React, { useState } from "react";

// const BookingForm = ({
//   accommodations,
//   selectedAccommodation,
//   setSelectedAccommodation,
//   roomType,
//   setRoomType,
//   checkInDate,
//   setCheckInDate,
//   checkOutDate,
//   setCheckOutDate,
//   onBookingSubmit,
// }) => {
//   const [showForm, setShowForm] = useState(false); // State to manage form visibility

//   const toggleForm = () => {
//     setShowForm(!showForm); // Toggle the state
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onBookingSubmit();
//   };

//   return (
//     <div className="booking">
//       <div
//         className="booking-head"
//         style={{ backgroundColor: "#27506c", height: "3rem", cursor: "pointer" }}
//         onClick={toggleForm} // Toggle form visibility on click
//       >
//         <div
//           className="booking-head-text d-flex justify-content-center align-items-center"
//           style={{ backgroundColor: "white", height: "80%", width: "30%", margin: "auto" }}
//         >
//           <h3 className="text-center m-0">BOOK NOW</h3>
//         </div>
//       </div>

//       {showForm && ( // Render form if showForm is true
//         <div className="booking-form">
//           <form onSubmit={handleSubmit} className="card container mt-5">
//             <div className="mb-3">
//               <label className="form-label">Accommodation:</label>
//               <select
//                 className="form-select"
//                 value={selectedAccommodation}
//                 onChange={(e) => setSelectedAccommodation(e.target.value)}
//                 required
//               >
//                 <option value="">Select Accommodation</option>
//                 {accommodations.map((accommodation) => (
//                   <option key={accommodation.sr_no} value={accommodation.sr_no}>
//                     {accommodation.work_centre}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Room Type:</label>
//               <select
//                 className="form-select"
//                 value={roomType}
//                 onChange={(e) => setRoomType(e.target.value)}
//                 required
//               >
//                 <option value="">Select Room Type</option>
//                 <option value="vip_room">VIP Room</option>
//                 <option value="vvip_suite">VVIP Suite</option>
//                 <option value="standard_room">Standard Room</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Check-in Date:</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Check-out Date:</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Book
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingForm;


// import React, { useState } from "react";

// const BookingForm = ({
//   accommodations,
//   selectedAccommodation,
//   setSelectedAccommodation,
//   roomType,
//   setRoomType,
//   checkInDate,
//   setCheckInDate,
//   checkOutDate,
//   setCheckOutDate,
//   relation,
//   setRelation,
//   guestName,
//   setGuestName,
//   numberOfRooms,
//   setNumberOfRooms,
//   onBookingSubmit,
// }) => {
//   const [showForm, setShowForm] = useState(false); // State to manage form visibility

//   const toggleForm = () => {
//     setShowForm(!showForm); // Toggle the state
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onBookingSubmit();
//   };

//   return (
//     <div className="booking">
//       <div
//         className="booking-head"
//         style={{ backgroundColor: "#27506c", height: "3rem", cursor: "pointer" }}
//         onClick={toggleForm} // Toggle form visibility on click
//       >
//         <div
//           className="booking-head-text d-flex justify-content-center align-items-center"
//           style={{ backgroundColor: "white", height: "80%", width: "30%", margin: "auto" }}
//         >
//           <h3 className="text-center m-0">BOOK NOW</h3>
//         </div>
//       </div>

//       {showForm && ( // Render form if showForm is true
//         <div className="booking-form">
//           <form onSubmit={handleSubmit} className="card container mt-5">
//             <div className="mb-3">
//               <label className="form-label">Accommodation:</label>
//               <select
//                 className="form-select"
//                 value={selectedAccommodation}
//                 onChange={(e) => setSelectedAccommodation(e.target.value)}
//                 required
//               >
//                 <option value="">Select Accommodation</option>
//                 {accommodations.map((accommodation) => (
//                   <option key={accommodation.sr_no} value={accommodation.sr_no}>
//                     {accommodation.work_centre}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Room Type:</label>
//               <select
//                 className="form-select"
//                 value={roomType}
//                 onChange={(e) => setRoomType(e.target.value)}
//                 required
//               >
//                 <option value="">Select Room Type</option>
//                 <option value="vip_room">VIP Room</option>
//                 <option value="vvip_suite">VVIP Suite</option>
//                 <option value="standard_room">Standard Room</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Check-in Date:</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Check-out Date:</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Relation:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={relation}
//                 onChange={(e) => setRelation(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Guest Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={guestName}
//                 onChange={(e) => setGuestName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Number of Rooms:</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 value={numberOfRooms}
//                 onChange={(e) => setNumberOfRooms(e.target.value)}
//                 required
//                 min="1"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Book
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from "react";

const BookingForm = ({
  accommodations,
  selectedAccommodation,
  setSelectedAccommodation,
  roomType,
  setRoomType,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  relation,
  setRelation,
  guestName,
  setGuestName,
  numberOfRooms,
  setNumberOfRooms,
  onBookingSubmit,
}) => {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit();
  };

  return (
    <div className="booking">
      <div
        className="booking-head"
        style={{ backgroundColor: "#27506c", height: "3rem", cursor: "pointer" }}
        onClick={toggleForm} // Toggle form visibility on click
      >
        <div
          className="booking-head-text d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "white", height: "90%", width: "30%", margin: "auto" }}
        >
          <h3 className="text-center m-0">BOOK NOW</h3>
        </div>
      </div>

      {showForm && ( // Render form if showForm is true
        <div className="booking-form">
          <form onSubmit={handleSubmit} className="card container mt-5">
            <div className="mb-3">
              <label className="form-label">Accommodation:</label>
              <select
                className="form-select"
                value={selectedAccommodation}
                onChange={(e) => setSelectedAccommodation(e.target.value)}
                required
              >
                <option value="">Select Accommodation</option>
                {accommodations.map((accommodation) => (
                  <option key={accommodation.sr_no} value={accommodation.sr_no}>
                    {accommodation.work_centre}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Room Type:</label>
              <select
                className="form-select"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
              >
                <option value="">Select Room Type</option>
                <option value="vip_room">VIP Room</option>
                <option value="vvip_suite">VVIP Suite</option>
                <option value="standard_room">Standard Room</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Check-in Date:</label>
              <input
                type="date"
                className="form-control"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Check-out Date:</label>
              <input
                type="date"
                className="form-control"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Relation:</label>
              <input
                type="text"
                className="form-control"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Guest Name:</label>
              <input
                type="text"
                className="form-control"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Number of Rooms:</label>
              <input
                type="number"
                className="form-control"
                value={numberOfRooms}
                onChange={(e) => setNumberOfRooms(e.target.value)}
                required
                min="1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
