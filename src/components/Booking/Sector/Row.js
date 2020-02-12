import React from "react";
import { connect } from "react-redux";

import booked from "../../../images/booked.png";
import free from "../../../images/free.png";

import { setSeats } from "../../../redux/actions/setSeats";
import { removeSeat } from "../../../redux/actions/removeSeat";

import "./Sector.scss";

const styles = {
  color: "#fff",
  maxWidth: "50px",
  margin: "5px",
  cursor: "pointer",
  borderRadius: "50%",
  padding: "10px"
};

const Row = ({
  seats,
  setChosenSeats,
  selectedSeats,
  removeSeat,
  rowNum,
  date,
  price,
  stringDate
}) => {
  return seats.map((seat, i) => {
    const found = selectedSeats.find(el => el.seatNum === seat._id);

    return (
      <>
        <img
          key={seat._id}
          src={seat.booked ? booked : free}
          alt="Movie"
          style={{ ...styles }}
          onClick={e => {
            // wowowowowow wowowowowowowow
            !seat.booked && e.target.classList.toggle("selected");
            !seat.booked && !selectedSeats.seatNum && !found
              ? setChosenSeats({
                  row: rowNum,
                  seatNum: seat._id,
                  seat: i,
                  date,
                  price,
                  stringDate
                })
              : removeSeat(seat._id);
          }}
        />
      </>
    );
  });
};

const mapStateToProps = state => ({
  selectedSeats: state.moviesReducer.selectedSeats
});

const mapDispatchToProps = {
  setSeats,
  removeSeat
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
