import React, { useEffect, useState, useRef  } from "react";
import axios from "axios";
import Nav from "./nav";
import Heading from "./heading";
import AccommodationTable from "./accomadations";
import Content from "./content";
import Footer from "./footer";
import BookingForm from "./bookingForm";
import AvailabilityTable from "./availability";
import { useLocation } from 'react-router-dom';
const Dash = () => {
  const [bookings, setBookings] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [relation, setRelation] = useState("");
  const [guestName, setGuestName] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const footerRef = useRef(null);
  const location = useLocation();
  const { user } = location.state || {};
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          `https://guesthouse-m97w.onrender.com/api/bookings/${user.user_id}`
        );
        setBookings(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchAccommodations = async () => {
      try {
        const res = await axios.get("https://guesthouse-m97w.onrender.com/api/accommodations");
        setAccommodations(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchBookings();
    fetchAccommodations();
  }, [user.user_id]);

  const onBookingSubmit = async () => {
    try {
      const selectedAccommodationObject = accommodations.find(
        (accommodation) => accommodation.sr_no === selectedAccommodation
      );

      const bookingData = {
        user_id: user.user_id,
        sr_no: selectedAccommodation,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        room_type: roomType,
        guest_house: selectedAccommodationObject.work_centre, // Set guest_house to work_centre name
        relation,
        guest_name: guestName,
        number_of_rooms: numberOfRooms,
        user_name: `${user.first_name} ${user.last_name}` // Set user_name from user prop
      };

      const res = await axios.post(
        "https://guesthouse-m97w.onrender.com/api/book",
        bookingData
      );
      setBookings([...bookings, res.data]);
      alert("Booking successful");

      // Update accommodations state
      // const updatedAccommodations = accommodations.map((accommodation) => {
      //   if (accommodation.sr_no === selectedAccommodation) {
      //     if (roomType === "vip_room") {
      //       return { ...accommodation, vip_rooms: accommodation.vip_rooms - 1 };
      //     } else if (roomType === "vvip_suite") {
      //       return {
      //         ...accommodation,
      //         vvip_suites: accommodation.vvip_suites - 1,
      //       };
      //     } else if (roomType === "standard_room") {
      //       return {
      //         ...accommodation,
      //         no_of_rooms: accommodation.no_of_rooms - 1,
      //       };
      //     }
      //   }
      //   return accommodation;
      // });
      // setAccommodations(updatedAccommodations);
    } catch (err) {
      console.error(err.message);
      alert("Booking failed");
    }
  };

  return (
    <div>
      <Nav user={user}  scrollToFooter={scrollToFooter}/>
      <Heading />
      <BookingForm
        accommodations={accommodations}
        selectedAccommodation={selectedAccommodation}
        setSelectedAccommodation={setSelectedAccommodation}
        roomType={roomType}
        setRoomType={setRoomType}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        relation={relation}
        setRelation={setRelation}
        guestName={guestName}
        setGuestName={setGuestName}
        numberOfRooms={numberOfRooms}
        setNumberOfRooms={setNumberOfRooms}
        onBookingSubmit={onBookingSubmit}
      />
      <Content />
      <AccommodationTable accommodations={accommodations} />
      <AvailabilityTable />
      <Footer id="footer" ref={footerRef}/>
    </div>
  );
};

export default Dash;
