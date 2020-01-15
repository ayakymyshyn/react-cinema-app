import React, { useEffect, useState, Fragment } from "react";

import "./MovieDetails.scss";
import Sector from "../../Booking/Sector/Sector";
import { connect } from "react-redux";
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
  isOk
}) => {
  const [selectedDate, setSelectedDate] = useState({});

  useEffect(() => {
    getSingleFilm(match.params.movieId);
    return () => {
      setBookStatus(false);
    };
  }, []);

  return (
    <div className="movie-details">
      <section class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-area-content">
                <h1>{movie && movie.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="transformers-area">
        <div class="container">
          <div class="transformers-box">
            <div class="row flexbox-center">
              <div class="col-lg-5 text-lg-left text-center">
                <div class="transformers-content">
                  <img
                    src={movie && movie.image}
                    alt="about"
                    className="detail-movie-image"
                  />
                </div>
              </div>
              <div class="col-lg-7">
                <div class="transformers-content">
                  <div class="details-overview">
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.moviesReducer.movie,
  isOk: state.moviesReducer.isOk
});

const mapDispatchToProps = dispatch => ({
  getSingleFilm: movie => dispatch(getSingleMovie(movie)),
  cleanSeatsArray: () => dispatch(cleanSeatsArray()),
  setBookStatus: status => dispatch(setBookStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
