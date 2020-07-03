/* eslint-disable react/forbid-prop-types */
// Core
import React from 'react';
// Other
import T from 'prop-types';
import { mapFilmDate } from '../../utils/mapFilmDate';

const SelectDate = ({ movies, onChangeHandler }) => (
  <div className="link">
    <select
      className="selectpicker"
      placeholder="Select Date"
      onBlur={(e) => onChangeHandler(e.target.value)}
    >
      <option value="" default>Select a date</option>
      {mapFilmDate(movies)}
    </select>
  </div>
);

export default SelectDate;

SelectDate.propTypes = {
  movies: T.array.isRequired,
  onChangeHandler: T.func.isRequired,
};
