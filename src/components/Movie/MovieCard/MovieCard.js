import React from "react";

import { displayFilmTime } from "../../../utils/displayFilmTime";
import { displayDateCorrectly } from "../../../utils/displayDateCorrectly";
import { Link } from "react-router-dom";

import "./MovieCard.scss";

const MovieCard = ({
  title,
  date,
  price,
  seatsAvaible,
  picture,
  stringDate
}) => (
  <div className="movie-card">
    <div
      className="movie-header"
      style={{ background: `url(${picture})`, backgroundSize: "cover" }}
    ></div>
    <div className="movie-content">
      <div className="movie-content-header">
        <Link to={`/movie/${title.toLowerCase().replace(/ /g, "-")}`}>
          <h3 className="movie-title">{title}</h3>
        </Link>
        <div className="imax-logo"></div>
      </div>
      <div className="movie-info">
        <div className="info-section">
          <label>Date & Time</label>
          {stringDate ? (
            <span>{stringDate}</span>
          ) : (
            <span>
              {displayDateCorrectly(date)} - {displayFilmTime(date)}
            </span>
          )}
        </div>
        <div className="info-section">
          <label>Price</label>
          <span>{price}</span>
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
