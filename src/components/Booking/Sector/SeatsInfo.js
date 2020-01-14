import React from "react";
import { connect } from "react-redux";

const SeatsInfo = ({ info }) => (
  <div className="card col-md-3">
    <div className="card-body">
      <h4 className="card-title">
        {info.length > 0 ? "Choosed seats: " : "No seats choosen"}
      </h4>
      <ul>
        {info &&
          info.map(el => <li>{`Row: ${el.row}, seat: ${el.seatNum}`}</li>)}
      </ul>
      {info.length > 0 ? (
        <a href="#!" className="card-link">
          Book tickets
        </a>
      ) : null}
    </div>
  </div>
);

const mapStateToProps = state => ({
  info: state.moviesReducer.selectedSeats
});

export default connect(mapStateToProps)(SeatsInfo);
