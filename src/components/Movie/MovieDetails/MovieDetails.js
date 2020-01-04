import React, { useEffect, useState } from "react";

import "./MovieDetails.scss";
import Sector from "../../Booking/Sector/Sector";
import { connect } from "react-redux";
import { films } from "../../../mockData/films";
import { getMovie } from "../../../utils/getMovie";
import { getSingleMovie } from "../../../redux/actions/getSingleMovie";
import { cleanSeatsArray } from "../../../redux/actions/cleanSeatsArray";
import { displayDateCorrectly } from "../../../utils/displayDateCorrectly";
import { displayFilmTime } from "../../../utils/displayFilmTime";

const MovieDetails = ({ match, getSingleFilm, film, cleanSeatsArray }) => {
  const [movie, setMovie] = useState({});
  const [selectedDate, setSelectedDate] = useState({});

  useEffect(() => {
    setMovie(...getMovie(films, match.params.movie));
    getSingleFilm(movie);
  }, [movie]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 details-image">
          <img className="img-fluid" src={movie && movie.image} alt="" />
        </div>
        <div className="col-md-9">
          <h3 className="my-3">{movie && movie.title}</h3>
          <p className="details-p">{movie && movie.description}</p>
          <h2 style={{ color: "#fff" }}>
            {selectedDate.date
              ? `Selected date: ${displayDateCorrectly(selectedDate.date)} - 
                  ${displayFilmTime(selectedDate.date)}`
              : "No date selected"}
          </h2>
          <Sector movie={movie} filmDate={selectedDate.date} />
          <div className="row">
            <div className="col-md-3">
              <ul className="list-group">
                {movie.dates &&
                  movie.dates.map((date, i) => (
                    <li
                      key={i}
                      className="list-group-item"
                      onClick={() => {
                        setSelectedDate(date);
                        cleanSeatsArray();
                      }}
                    >
                      {`${displayDateCorrectly(date.date)} - 
                  ${displayFilmTime(date.date)}`}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  film: state.moviesReducer.movie
});

const mapDispatchToProps = dispatch => ({
  getSingleFilm: movie => dispatch(getSingleMovie(movie)),
  cleanSeatsArray: () => dispatch(cleanSeatsArray())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
