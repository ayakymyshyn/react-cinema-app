import React, { useEffect, useState } from "react";

import "./MovieDetails.scss";
import Sector from "../../Booking/Sector/Sector";

import { films } from "../../../mockData/films";
import { getMovie } from "../../../utils/getMovie";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(...getMovie(films, match.params.movie));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 details-image">
          <img className="img-fluid" src={movie.image} alt="" />
        </div>
        <div className="col-md-9">
          <h3 className="my-3">{movie.title}</h3>
          <p className="details-p">{movie.description}</p>
          <Sector />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
