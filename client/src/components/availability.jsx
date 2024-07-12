// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AvailabilityTable = () => {
// //   const [checkInDate, setCheckInDate] = useState('');
// //   const [checkOutDate, setCheckOutDate] = useState('');
// //   const [filteredAccommodations, setFilteredAccommodations] = useState([]);
// //   const [showMobileCards, setShowMobileCards] = useState(false);

// //   const handleCheckAvailability = async () => {
// //     if (!checkInDate || !checkOutDate) {
// //       alert("Please select both check-in and check-out dates");
// //       return;
// //     }

// //     try {
// //       const res = await axios.get('https://guesthouse-m97w.onrender.com/api/accommodations/availability', {
// //         params: {
// //           checkInDate,
// //           checkOutDate
// //         }
// //       });
// //       console.log(res.data); // Log the response data to check the result
// //       setFilteredAccommodations(res.data);
// //       setShowMobileCards(true);
// //     } catch (err) {
// //       console.error(err.message);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <div className="card">
// //         <div className="card-body">
// //           <div className="horizontal-div">
// //             <div className="select-div">
// //               <label>Check-In Date:</label>
// //               <input
// //                 type="date"
// //                 className="form-control"
// //                 value={checkInDate}
// //                 onChange={(e) => setCheckInDate(e.target.value)}
// //               />
// //             </div>
// //             <div className="select-div">
// //               <label>Check-Out Date:</label>
// //               <input
// //                 type="date"
// //                 className="form-control"
// //                 value={checkOutDate}
// //                 onChange={(e) => setCheckOutDate(e.target.value)}
// //               />
// //             </div>
// //             <div className="button-div">
// //               <button
// //                 type="button"
// //                 className="btn btn-primary"
// //                 onClick={handleCheckAvailability}
// //               >
// //                 Check Availability
// //               </button>
// //             </div>
// //           </div>
// //           {filteredAccommodations.length > 0 ? (
// //             <div className="table-container">
// //               <table className="table table-striped mt-4">
// //                 <thead>
// //                   <tr>
// //                     <th scope="col">Work Centre</th>
// //                     <th scope="col">Available Standard Rooms</th>
// //                     <th scope="col">Available VIP Rooms</th>
// //                     <th scope="col">Available VVIP Suites</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {filteredAccommodations.map((accommodation) => (
// //                     <tr key={accommodation.sr_no}>
// //                       <td>{accommodation.work_centre}</td>
// //                       <td>{accommodation.no_of_rooms - accommodation.standard_booked}</td>
// //                       <td>{accommodation.vip_rooms - accommodation.vip_booked}</td>
// //                       <td>{accommodation.vvip_suites - accommodation.vvip_booked}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           ) : showMobileCards ? (
// //             <p className="mt-4">No accommodations available for the selected dates.</p>
// //           ) : null}
// //           {showMobileCards && (
// //             <div>
// //               {filteredAccommodations.map((accommodation) => (
// //                 <div key={accommodation.sr_no} className="mobile-card">
// //                   <div className="mobile-card-header">
// //                     Work Centre: {accommodation.work_centre}
// //                   </div>
// //                   <div className="mobile-card-body">
// //                     <strong>Available Standard Rooms:</strong> {accommodation.no_of_rooms - accommodation.standard_booked}
// //                   </div>
// //                   <div className="mobile-card-body">
// //                     <strong>Available VIP Rooms:</strong> {accommodation.vip_rooms - accommodation.vip_booked}
// //                   </div>
// //                   <div className="mobile-card-body">
// //                     <strong>Available VVIP Suites:</strong> {accommodation.vvip_suites - accommodation.vvip_booked}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AvailabilityTable;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AvailabilityTable = () => {
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [selectedAccommodation, setSelectedAccommodation] = useState('select');
//   const [accommodations, setAccommodations] = useState([]);
//   const [filteredAccommodations, setFilteredAccommodations] = useState([]);
//   const [showMobileCards, setShowMobileCards] = useState(false);

//   useEffect(() => {
//     const fetchAccommodations = async () => {
//       try {
//         const res = await axios.get('https://guesthouse-m97w.onrender.com/api/accomodations');
//         setAccommodations(res.data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };

//     fetchAccommodations();
//   }, []);

//   const handleCheckAvailability = async () => {
//     if (!checkInDate || !checkOutDate) {
//       alert("Please select both check-in and check-out dates");
//       return;
//     }

//     if (selectedAccommodation === 'select') {
//       setFilteredAccommodations([]);
//       setShowMobileCards(true);
//       return;
//     }

//     try {
//       const res = await axios.get('https://guesthouse-m97w.onrender.com/api/accommodations/availability', {
//         params: {
//           checkInDate,
//           checkOutDate,
//           selectedAccommodation
//         }
//       });
//       console.log(res.data); // Log the response data to check the result
//       setFilteredAccommodations(res.data);
//       setShowMobileCards(true);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card">
//         <div className="card-body">
//           <div className="horizontal-div">
//             <div className="select-div">
//               <label>Accommodation:</label>
//               <select
//                 className="form-control"
//                 value={selectedAccommodation}
//                 onChange={(e) => setSelectedAccommodation(e.target.value)}
//               >
//                 <option value="select">Select Work Centre</option>
//                 <option value="all">All Accommodations</option>
//                 {accommodations.map((acc) => (
//                   <option key={acc.sr_no} value={acc.sr_no}>{acc.work_centre}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="select-div">
//               <label>Check-In Date:</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//               />
//             </div>
//             <div className="select-div">
//               <label>Check-Out Date:</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//               />
//             </div>
//             <div className="button-div">
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handleCheckAvailability}
//               >
//                 Check Availability
//               </button>
//             </div>
//           </div>
//           {filteredAccommodations.length > 0 ? (
//             <div className="table-container">
//               <table className="table table-striped mt-4">
//                 <thead>
//                   <tr>
//                     <th scope="col">Work Centre</th>
//                     <th scope="col">Available Standard Rooms</th>
//                     <th scope="col">Available VIP Rooms</th>
//                     <th scope="col">Available VVIP Suites</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredAccommodations.map((accommodation) => (
//                     <tr key={accommodation.sr_no}>
//                       <td>{accommodation.work_centre}</td>
//                       <td>{accommodation.no_of_rooms - accommodation.standard_booked}</td>
//                       <td>{accommodation.vip_rooms - accommodation.vip_booked}</td>
//                       <td>{accommodation.vvip_suites - accommodation.vvip_booked}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : showMobileCards ? (
//             <p className="mt-4">No accommodations available for the selected dates.</p>
//           ) : null}
//           {showMobileCards && (
//             <div>
//               {filteredAccommodations.map((accommodation) => (
//                 <div key={accommodation.sr_no} className="mobile-card">
//                   <div className="mobile-card-header">
//                     Work Centre: {accommodation.work_centre}
//                   </div>
//                   <div className="mobile-card-body">
//                     <strong>Available Standard Rooms:</strong> {accommodation.no_of_rooms - accommodation.standard_booked}
//                   </div>
//                   <div className="mobile-card-body">
//                     <strong>Available VIP Rooms:</strong> {accommodation.vip_rooms - accommodation.vip_booked}
//                   </div>
//                   <div className="mobile-card-body">
//                     <strong>Available VVIP Suites:</strong> {accommodation.vvip_suites - accommodation.vvip_booked}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailabilityTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailabilityTable = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [selectedAccommodation, setSelectedAccommodation] = useState('select');
  const [accommodations, setAccommodations] = useState([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [showMobileCards, setShowMobileCards] = useState(false);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const res = await axios.get('https://guesthouse-m97w.onrender.com/api/accommodations');
        setAccommodations(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchAccommodations();
  }, []);

  const handleCheckAvailability = async () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select both check-in and check-out dates");
      return;
    }

    if (selectedAccommodation === 'select') {
      setFilteredAccommodations([]);
      setShowMobileCards(true);
      return;
    }

    try {
      const res = await axios.get('https://guesthouse-m97w.onrender.com/api/accommodations/availability', {
        params: {
          checkInDate,
          checkOutDate,
          selectedAccommodation
        }
      });
      console.log(res.data); // Log the response data to check the result
      setFilteredAccommodations(res.data);
      setShowMobileCards(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-12 mb-3">
              <label>Accommodation:</label>
              <select
                className="form-control"
                value={selectedAccommodation}
                onChange={(e) => setSelectedAccommodation(e.target.value)}
              >
                <option value="select">Select Accommodation</option>
                <option value="all">All Accommodations</option>
                {accommodations.map((acc) => (
                  <option key={acc.sr_no} value={acc.sr_no}>{acc.work_centre}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3 col-12 mb-3">
              <label>Check-In Date:</label>
              <input
                type="date"
                className="form-control"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
            <div className="col-md-3 col-12 mb-3">
              <label>Check-Out Date:</label>
              <input
                type="date"
                className="form-control"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
            <div className="col-md-3 col-12 mb-3">
              <label>&nbsp;</label>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleCheckAvailability}
              >
                Check Availability
              </button>
            </div>
          </div>
          {filteredAccommodations.length > 0 ? (
            <div className="table-container">
              <table className="table table-striped mt-4">
                <thead>
                  <tr>
                    <th scope="col">Guest House</th>
                    <th scope="col">Available Standard Rooms</th>
                    <th scope="col">Available VIP Rooms</th>
                    <th scope="col">Available VVIP Suites</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccommodations.map((accommodation) => (
                    <tr key={accommodation.sr_no}>
                      <td>{accommodation.work_centre}</td>
                      <td>{accommodation.no_of_rooms - accommodation.standard_booked}</td>
                      <td>{accommodation.vip_rooms - accommodation.vip_booked}</td>
                      <td>{accommodation.vvip_suites - accommodation.vvip_booked}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : showMobileCards ? (
            <p className="mt-4">No accommodations available for the selected dates.</p>
          ) : null}
          {showMobileCards && (
            <div>
              {filteredAccommodations.map((accommodation) => (
                <div key={accommodation.sr_no} className="mobile-card">
                  <div className="mobile-card-header">
                    Guest House: {accommodation.work_centre}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Available Standard Rooms:</strong> {accommodation.no_of_rooms - accommodation.standard_booked}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Available VIP Rooms:</strong> {accommodation.vip_rooms - accommodation.vip_booked}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Available VVIP Suites:</strong> {accommodation.vvip_suites - accommodation.vvip_booked}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTable;
