import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHotel ,faSuitcase } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  return (
    <div className="main-content">
      <div className="content-text">
        <div className="text1">Experience Comfort and Convenience with ONGC <br/>Guesthouses – Where Every Stay Feels Like Home</div>
        <div className="text2">Welcome to your<br/> Home away from home</div>
      </div>
      <div className="card-content">
        <div className="content">
          <div
            className="card content-size card1"
            // style={{ width: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon
                className="content-card"
                icon={faHouse}
                size="5x"
              />
              <h5 className="card-title content-card">
                Enjoy a Vacation From Work
              </h5>
            </div>
          </div>

          <div
            className="card content-size card2"
            // style={{ width: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon
                className="content-card"
                icon={faHotel}
                size="5x"
              />
              <h5 className="card-title content-card">Best Quality Stay</h5>
            </div>
          </div>

          <div
            className="card content-size card3"
            // style={{ width: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon
                className="content-card"
                icon={faSuitcase}
                size="5x"
              />
              <h5 className="card-title content-card">
                Your Perfect Gateway
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
