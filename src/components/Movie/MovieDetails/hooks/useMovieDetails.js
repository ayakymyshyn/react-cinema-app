// Core
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Other
import { cleanSeatsArray } from '../../../../redux/actions/cleanSeatsArray';
import { setBookStatus } from '../../../../redux/actions/setBookStatus';

export const useMovieDetails = () => {
  const [selectedDate, setSelectedDate] = useState({});
  // Actions
  const dispatch = useDispatch();
  const cleanSeats = () => dispatch(cleanSeatsArray());
  const changeBookStatus = (status) => dispatch(setBookStatus(status));

  return {
    selectedDate, setSelectedDate, cleanSeats, changeBookStatus,
  };
};
