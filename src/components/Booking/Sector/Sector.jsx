/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Row from './Row';
import SeatsInfo from './SeatsInfo';

import { bookTicket } from '../../../utils/bookTicket';
import { setBookStatus } from '../../../redux/actions/setBookStatus';

const Sector = ({
  movie,
  filmDate,
  dateIndex,
  stringDate,
}) => {
  const dispatch = useDispatch();
  const ticketInfo = useSelector((state) => state.moviesReducer.selectedSeats);
  const setBookingStatus = (status) => dispatch(setBookStatus(status));
  const seatsData = {
    bookedSeats: ticketInfo,
  };
  const url = `https://afternoon-woodland-86059.herokuapp.com/movies/${movie._id}`;
  return (
    <div className="sector">
      <h4 className="screen">SCREEN</h4>
      <div className="cinema-seats">
        {movie.dates
          && movie.dates.map((date) => (
            date.date === filmDate
              && date.rows.map((row, i) => (
                <>
                  <Row
                    seats={row.seats}
                    key={row._id}
                    rowNum={i}
                    date={dateIndex}
                    price={movie.price}
                    stringDate={stringDate}
                  />
                  <br />
                </>
              ))
          ))}
      </div>
      <SeatsInfo
        bookFunc={() => bookTicket(url, seatsData) && setBookingStatus(true)}
      />
    </div>
  );
};

export default Sector;
