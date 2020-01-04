import React from "react";
import { connect } from "react-redux";

import Row from "./Row";
import SeatsInfo from "./SeatsInfo";

const Sector = ({ movie, filmDate, selectedSeats }) => {
  console.log(selectedSeats);
  return (
    <div className="sector">
      <div>{"SCREEN"}</div>
      <SeatsInfo info={selectedSeats} />
      {movie.dates &&
        movie.dates.map(date => {
          return (
            date.date === filmDate &&
            date.rows.map((row, i) => {
              return (
                <React.Fragment>
                  <Row seats={row.seats} key={i} rowNum={i + 1} />
                  <br />
                </React.Fragment>
              );
            })
          );
        })}
      
    </div>
  );
};

const mapStateToProps = state => ({
  selectedSeats: state.moviesReducer.selectedSeats
});

export default connect(mapStateToProps)(Sector);
