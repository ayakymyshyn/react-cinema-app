import React from "react";

const seats = [
  { booked: false, type: "default", id: 1 },
  { booked: false, type: "default", id: 2 },
  { booked: false, type: "default", id: 3 },
  { booked: false, type: "default", id: 4 },
  { booked: false, type: "default", id: 5 },
  { booked: false, type: "default", id: 6 },
  { booked: false, type: "default", id: 7 },
  { booked: false, type: "default", id: 8 },
  { booked: false, type: "default", id: 9 },
  { booked: false, type: "default", id: 7 },
  { booked: false, type: "default", id: 8 },
  { booked: false, type: "default", id: 9 },
  { booked: false, type: "default", id: 9 },
  { booked: false, type: "default", id: 9 }
];
const rowsNum = 4;
const seatsInRow = 3;

const styles = {
    color: "#fff"
}
const Sector = () => {
  return (
    <div>
      {seats.map((seat, i) => {
        return (i + 1) % (seatsInRow / rowsNum) === 0 ? (
          <React.Fragment>
            <span style={styles} onClick={() => console.log(i)}>{seat.booked.toString()}</span>
            <br />{" "}
          </React.Fragment>
        ) : (
          <span style={styles} onClick={() => console.log(i)}>{`${seat.booked.toString()} `}</span>
        );
      })}
    </div>
  );
};

export default Sector;
