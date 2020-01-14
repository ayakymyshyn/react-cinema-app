import React from "react";

import { displayFilmTime } from "../../../utils/displayFilmTime";
import { displayDateCorrectly } from "../../../utils/displayDateCorrectly";
import { Link } from "react-router-dom";

import "./MovieCard.scss";

const MovieCard = ({ movie, stringDate }) => (
  <div className="movie-card">
    <div
      className="movie-header"
      style={{ background: `url(${movie.image})`, backgroundSize: "cover" }}
    ></div>
    <div className="movie-content">
      <div className="movie-content-header">
        <Link to={`/movie/${movie._id}`}>
          <h3 className="movie-title">{movie.title}</h3>
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
              {displayDateCorrectly(movie.dates[0].date)} - {displayFilmTime(movie.dates[0].date)}
            </span>
          )}
        </div>
        <div className="info-section">
          <label>Price</label>
          <span>{movie.price}</span>
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
