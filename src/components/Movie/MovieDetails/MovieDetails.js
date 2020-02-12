import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import Sector from "../../Booking/Sector/Sector";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleMovie } from "../../../redux/actions/getSingleMovie";
import { cleanSeatsArray } from "../../../redux/actions/cleanSeatsArray";
import { setBookStatus } from "../../../redux/actions/setBookStatus";
import { displayDateCorrectly } from "../../../utils/displayDateCorrectly";
import { displayFilmTime } from "../../../utils/displayFilmTime";

import "../../../css/style.css";

const MovieDetails = ({
  match,
  getSingleFilm,
  movie,
  cleanSeatsArray,
  setBookStatus,
  movieLoaded
}) => {
  const [selectedDate, setSelectedDate] = useState({});

  useEffect(() => {
    getSingleMovie(match.params.movieId);
    return () => {
      setBookStatus(false);
    };
  }, []);

  return movieLoaded ? (
    <div className="movie-details">
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-area-content">
                <h1>{movie && movie.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="transformers-area">
        <div className="container">
          <div className="transformers-box">
            <div className="row flexbox-center">
              <div className="col-lg-5 text-lg-left text-center">
                <div className="transformers-content">
                  <img
                    src={movie && movie.image}
                    alt="about"
                    className="detail-movie-image"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="transformers-content">
                  <div className="details-overview">
                    <h2>{movie && movie.title}</h2>
                    <p>{movie && movie.description}</p>
                  </div>
                </div>
                <h3 style={{ color: "#fff" }}>
                  {selectedDate.date
                    ? `Selected date: ${displayDateCorrectly(
                        selectedDate.date
                      )} - 
                  ${displayFilmTime(selectedDate.date)}`
                    : "Select date, please"}
                </h3>
                <ul className="nav">
                  {movie.dates &&
                    movie.dates.map((date, i) => (
                      <li
                        key={date._id}
                        className="nav-item date-list-item"
                        onClick={() => {
                          setSelectedDate({ ...date, idx: i });
                          cleanSeatsArray();
                        }}
                      >
                        {`${displayDateCorrectly(date.date)} - 
                  ${displayFilmTime(date.date)}`}
                      </li>
                    ))}
                </ul>
                <Sector
                  movie={movie}
                  filmDate={selectedDate.date}
                  dateIndex={selectedDate.idx}
                  stringDate={`${displayDateCorrectly(selectedDate.date)} - 
                  ${displayFilmTime(selectedDate.date)}`}
                />
                <Link to="/" className="theme-btn">
                  Back To Main Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="spinner">
      <img src="https://www.defined.com/images/animated_loading__by__amiri.gif" />
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.moviesReducer.movie,
  movieLoaded: state.moviesReducer.movieLoaded
});

const mapDispatchToProps = {
  getSingleMovie,
  cleanSeatsArray,
  setBookStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
