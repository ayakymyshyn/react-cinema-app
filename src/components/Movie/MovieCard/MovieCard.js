import React from "react";

import "./MovieCard.scss";

const MovieCard = ({
  title,
  date,
  screen,
  seatsAvaible,
  picture,
  hour,
  minutes,
  mounth
}) => (
  <div className="movie-card">
    <div
      className="movie-header"
      style={{ background: `url(${picture})`, backgroundSize: "cover" }}
    ></div>
    <div className="movie-content">
      <div className="movie-content-header">
        <a href="#">
          <h3 className="movie-title">{title}</h3>
        </a>
        <div className="imax-logo"></div>
      </div>
      <div className="movie-info">
        <div className="info-section">
          <label>Date & Time</label>
          <span>
            {`${date}.${mounth < 10 ? `0${mounth}` : mounth}`} - {`${hour}:${minutes}`}
          </span>
        </div>
        <div className="info-section">
          <label>Screen</label>
          <span>{screen}</span>
        </div>
        <div className="info-section">
          <label>Seats avaible</label>
          <span>{seatsAvaible === 0 ? "Sold out" : seatsAvaible}</span>
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
