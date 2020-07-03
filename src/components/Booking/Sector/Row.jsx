/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Core
import React from 'react';
// Other
import { useBookSeats } from './hooks/useBookSeats';
import booked from '../../../images/booked.png';
import free from '../../../images/free.png';
import './Sector.scss';

const styles = {
  color: '#fff',
  maxWidth: '50px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '50%',
  padding: '10px',
};

const Row = ({
  seats,
  rowNum,
  date,
  price,
  stringDate,
}) => seats.map((seat, i) => {
  const { selectedSeats, setChosenSeats, deleteSeat } = useBookSeats();
  const found = selectedSeats.find((el) => el.seatNum === seat._id);
  const clickHandler = (e) => {
    if (!seat.booked) {
      e.target.classList.toggle('selected');
    }
    return !seat.booked && !selectedSeats.seatNum && !found ? setChosenSeats({
      row: rowNum,
      seatNum: seat._id,
      seat: i,
      date,
      price,
      stringDate,
    }) : deleteSeat(seat._id);
  };
  return (
    <>
      <img
        key={seat._id}
        src={seat.booked ? booked : free}
        alt="Movie"
        style={{ ...styles }}
        onClick={clickHandler}
      />
    </>
  );
});

export default Row;
