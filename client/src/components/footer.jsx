import React,  { useRef , forwardRef}  from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer mt-5" id="footer" ref={ref}>
      <div className="top mt-5">
        <div className="left">
          <div className="footer-heading mt-3">BOOK YOUR STAY</div>
          <div className="footer-contact">
            <div className="office">
              <div className="contact-head">Registered Office:</div>
              <div className="office-text">Plot No. 5A- 5B Nelson Mandela Road, Vasant Kunj, New Delhi, 110070</div>
            </div>
            <div className="coorporate">
              <div className="contact-head">Corporate Identity Number:</div>
              <div className="coorporate-text">L74899DL1993GOI054155</div>
            </div>
            <div className="number" style={{ display: 'inline' }}>
              <p className="contact-head" style={{ display: 'inline', margin: 0 }}>Telephone No.</p> 011-26750998; 
              <p className="contact-head" style={{ display: 'inline', margin: 0 }}>Fax No:</p> 011-26750991/ 26129091
            </div>
            <div className="link">
              <div className="contact-head">For registering any grievances, please visit ONGC Grievance portal:</div>
              <div className="link-text">
                <a href="https://grievance.ongc.co.in" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                  https://grievance.ongc.co.in
                </a>
              </div>
            </div>
          </div>
          <div className="footer-social"></div>
        </div>
        <div className="right"></div>
      </div>
      <div className="bottom  ">
        © Oil and Natural Gas Corporation Limited, All Rights Reserved.
      </div>
    </footer>
  );
});

export default Footer;
