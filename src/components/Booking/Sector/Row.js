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

const Row = ({ seats, setChosenSeats, selectedSeats, removeSeat, rowNum }) => {
  return seats.map((seat, i) => {
    let found = selectedSeats.find(el => el.seat === seat._id);
    return (
      <React.Fragment>
        <img
          key={seat._id}
          src={seat.booked ? booked : free}
          alt="Movie"
          style={{ ...styles }}
          onClick={e => {
            !seat.booked && e.target.classList.toggle("selected");
            !seat.booked && !selectedSeats.seat && !found
              ? setChosenSeats({
                  row: rowNum,
                  seat: seat._id,
                  seatNum: i + 1
                })
              : removeSeat(seat._id);
          }}
        />
      </React.Fragment>
    );
  });
};

const mapStateToProps = state => ({
  selectedSeats: state.moviesReducer.selectedSeats
});

const mapDispatchToProps = dispatch => ({
  setChosenSeats: seats => dispatch(setSeats(seats)),
  removeSeat: seat => dispatch(removeSeat(seat))
});

export default connect(mapStateToProps, mapDispatchToProps)(Row);
