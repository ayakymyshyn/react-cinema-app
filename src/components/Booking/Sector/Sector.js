import React from "react";

import Row from "./Row";
import SeatsInfo from "./SeatsInfo";
import { connect } from "react-redux";

import { bookTicket } from "../../../utils/bookTicket";
import { setBookStatus } from "./../../../redux/actions/setBookStatus";

const Sector = ({ movie, filmDate, dateIndex, ticketInfo, setBookStatus }) => {
  const seatsData = {
    bookedSeats: ticketInfo
  };
  const url = `https://afternoon-woodland-86059.herokuapp.com/movies/${movie._id}`;
  return (
    <div className="sector">
      <h4 className="screen">SCREEN</h4>
      <div className="cinema-seats">
        {movie.dates &&
          movie.dates.map(date => {
            return (
              date.date === filmDate &&
              date.rows.map((row, i) => {
                return (
                  <React.Fragment>
                    <Row
                      seats={row.seats}
                      key={row._id}
                      rowNum={i}
                      date={dateIndex}
                      price={movie.price}
                    />
                    <br />
                  </React.Fragment>
                );
              })
            );
          })}
      </div>
      <SeatsInfo
        bookFunc={() => {
          bookTicket(url, seatsData) && setBookStatus(true);
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  ticketInfo: state.moviesReducer.selectedSeats
});

const mapDispatchToProps = dispatch => ({
  setBookStatus: status => dispatch(setBookStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sector);
