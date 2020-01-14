import React from "react";

import Row from "./Row";
import SeatsInfo from "./SeatsInfo";

const Sector = ({ movie, filmDate, selectedSeats }) => {
  console.log(selectedSeats);
  console.log(movie);
  return (
    <div className="sector">
      <div>{"SCREEN"}</div>
      <SeatsInfo />
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

export default Sector;
