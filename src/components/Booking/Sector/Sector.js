import React from "react";

import booked from "../../../images/booked.png";
import free from "../../../images/free.png";

const seats = [
  { booked: false, type: "default", id: 1 },
  { booked: true, type: "default", id: 2 },
  { booked: false, type: "default", id: 3 },
  { booked: false, type: "default", id: 4 },
  { booked: false, type: "default", id: 5 },
  { booked: false, type: "default", id: 6 },
  { booked: false, type: "default", id: 7 },
  { booked: false, type: "default", id: 8 },
  { booked: false, type: "default", id: 9 }
];

const rowsNum = 3;
const seatsNum = 9;

const styles = {
  color: "#fff",
  maxWidth: "50px",
  margin: "5px"
};

const Sector = (seets, numberOfRows, seatsNumber) => {
  return (
    <div className="sector">
      <div>{"SCREEN"}</div>
      {seats.map((seat, i) => {
        return (i + 1) % (seatsNum / rowsNum) === 0 ? (
          <React.Fragment>
            <img
              src={seat.booked ? booked : free}
              style={styles}
              onClick={() => console.log(seat.id)}
            />
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              src={seat.booked ? booked : free}
              style={styles}
              onClick={() => console.log(seat.id)}
            />
          </React.Fragment>
        );
      })}
      <button className="btn btn-primary">Book ticket</button>
    </div>
  );
};

export default Sector;
