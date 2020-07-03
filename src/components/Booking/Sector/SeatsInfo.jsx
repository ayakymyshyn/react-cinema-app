/* eslint-disable no-underscore-dangle */
// Core
import React from 'react';
import { useSelector } from 'react-redux';
// Other
import T from 'prop-types';

const SeatsInfo = ({ bookFunc }) => {
  let price = 0;
  const info = useSelector((state) => state.moviesReducer.selectedSeats);
  // Separated logic
  const ticketInfoJSX = (info
    && info.map((el) => {
      price += el.price;
      return <h5 key={el._id}>{`Row: ${el.row + 1}, seat: ${el.seat + 1}`}</h5>;
    }));

  return (
    <div className="">
      <div className="row justify-content-end">
        {info.length > 0 ? (
          <div className="summary-info">
            {ticketInfoJSX}
            <h4>
              {'Total:'}
              {price}
              {'$'}
            </h4>
            <button
              type="button"
              className="btn btn-primary"
              onClick={bookFunc}
            >
              {'Book ticket'}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SeatsInfo;

SeatsInfo.propTypes = {
  bookFunc: T.func.isRequired,
};
