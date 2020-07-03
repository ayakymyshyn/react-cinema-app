/* eslint-disable jsx-a11y/label-has-associated-control */
// Core
import React from 'react';
// Other
import T from 'prop-types';
import { displayDateCorrectly } from '../../../../utils/displayDateCorrectly';
import { displayFilmTime } from '../../../../utils/displayFilmTime';

export const MovieInfo = ({ stringDate, date, price }) => {
  const dateJSX = stringDate ? (<span id="cinema-date">{stringDate}</span>) : (
    <span>
      {displayDateCorrectly(date)}
      {' - '}
      {displayFilmTime(date)}
    </span>
  );

  return (
    <div className="movie-info">
      <div className="info-section">
        <label htmlFor="cinema-date">Date & Time</label>
        {dateJSX}
      </div>
      <div className="info-section">
        <label>Price</label>
        <span>{price}</span>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  stringDate: T.string.isRequired,
  date: T.string.isRequired,
  price: T.number.isRequired,
};
