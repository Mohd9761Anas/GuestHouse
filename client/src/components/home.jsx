import React, { useEffect, useState,   useRef  } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Nav from './nav';
import Heading from './heading';
import AccommodationTable from './accomadations';
import Content from './content';
import Footer from './footer';
import Slider from './imageSlider';
import AvailabilityTable from './availability';

const Home = () => {
  
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [accommodations, setAccommodations] = useState([]);
 
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
 
  return (
    <div>
      <Nav scrollToFooter={scrollToFooter}/>
      <Heading />
      <Content />
      <AccommodationTable accommodations={accommodations} />
      {/* <Slider /> */}
      <AvailabilityTable />
      <Footer id="footer" ref={footerRef}/>
    </div>
  );
};

export default Home;
