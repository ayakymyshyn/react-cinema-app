import React from "react";

const SeatsInfo = ({ info }) => (
  <div className="card col-md-3">
    <div className="card-body">
      <h4 className="card-title">Choosed seats: </h4>
      <ul>
        {info && info.map(el => <li>{`Row: ${el.row}, seat: ${el.seat}`}</li>)}
      </ul>
      <a href="#!" className="card-link">
        Card link
      </a>
    </div>
  </div>
);

export default SeatsInfo;
