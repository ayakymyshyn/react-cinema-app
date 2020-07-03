/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Core
import React from 'react';
// Other
import T from 'prop-types';
// Components
import { MovieCardHeader } from './elements/MovieCardHeader';
import { MovieContentHeader } from './elements/MovieContentHeader';
import { MovieInfo } from './elements/MovieInfo';
// Styles
import './MovieCard.scss';

const MovieCard = ({ movie, stringDate }) => (
  <div className="movie-card">
    <MovieCardHeader background={movie.image} />
    <div className="movie-content">
      <MovieContentHeader id={movie._id} title={movie.title} />
      <MovieInfo stringDate={stringDate} date={movie.dates[0].date} price={movie.price} />
    </div>
  </div>
);

MovieCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: T.object.isRequired,
  stringDate: T.string.isRequired,
};

export default MovieCard;
