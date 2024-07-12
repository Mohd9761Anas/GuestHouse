import React, { useState } from 'react';

const AccommodationTable = ({ accommodations }) => {
  const [selectedWorkCentre, setSelectedWorkCentre] = useState('');
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [showMobileCards, setShowMobileCards] = useState(false);

  const handleWorkCentreChange = (e) => {
    setSelectedWorkCentre(e.target.value);
  };

  const handleCheckAvailability = () => {
    if (selectedWorkCentre === '' || selectedWorkCentre === 'all') {
      setFilteredAccommodations(accommodations);
    } else {
      setFilteredAccommodations(
        accommodations.filter((accommodation) => accommodation.work_centre === selectedWorkCentre)
      );
    }
    setShowMobileCards(true);
  };

  const uniqueWorkCentres = [...new Set(accommodations.map((accommodation) => accommodation.work_centre))];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="horizontal-div">
            <div className="select-div">
              <select
                id="workCentreSelect"
                className="form-control"
                value={selectedWorkCentre}
                onChange={handleWorkCentreChange}
              >
                <option value="">Select a Guest House</option>
                <option value="all">All Accommodations</option>
                {uniqueWorkCentres.map((workCentre) => (
                  <option key={workCentre} value={workCentre}>
                    {workCentre}
                  </option>
                ))}
              </select>
            </div>
            <div className="button-div">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCheckAvailability}
              >
                Check Accommodations
              </button>
            </div>
          </div>
          {selectedWorkCentre && filteredAccommodations.length > 0 ? (
            <div className="table-container">
              <table className="table table-striped mt-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Work Centre</th>
                    <th scope="col">VIP Rooms</th>
                    <th scope="col">VVIP Suites</th>
                    <th scope="col">Standard Rooms</th>
                    <th scope="col">Allotment Criteria</th>
                    <th scope="col">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccommodations.map((accommodation, index) => (
                    <tr key={accommodation.sr_no}>
                      <th scope="row">{index + 1}</th>
                      <td>{accommodation.work_centre}</td>
                      <td>{accommodation.vip_rooms}</td>
                      <td>{accommodation.vvip_suites}</td>
                      <td>{accommodation.no_of_rooms}</td>
                      <td>{accommodation.allotment_criteria}</td>
                      <td>{accommodation.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : selectedWorkCentre && filteredAccommodations.length === 0 ? (
            <p className="mt-4">No accommodations available for the selected work centre.</p>
          ) : null}
          {showMobileCards && (
            <div>
              {filteredAccommodations.map((accommodation, index) => (
                <div key={accommodation.sr_no} className="mobile-card">
                  <div className="mobile-card-header">
                    Accommodation #{index + 1}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Work Centre:</strong> {accommodation.work_centre}
                  </div>
                  <div className="mobile-card-body">
                    <strong>VIP Rooms:</strong> {accommodation.vip_rooms}
                  </div>
                  <div className="mobile-card-body">
                    <strong>VVIP Suites:</strong> {accommodation.vvip_suites}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Standard Rooms:</strong> {accommodation.no_of_rooms}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Allotment Criteria:</strong> {accommodation.allotment_criteria}
                  </div>
                  <div className="mobile-card-body">
                    <strong>Remarks:</strong> {accommodation.remarks}
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

export default AccommodationTable;
