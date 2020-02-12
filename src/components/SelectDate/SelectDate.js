import React from "react";

import { displayDateCorrectly } from "../utils/displayDateCorrectly";
import { displayFilmTime } from "../utils/displayFilmTime";

const SelectDate = ({ movies, onChangeHandler }) => (
  <div className="link">
    <select
      className="selectpicker"
      placeholder="Select Date"
      onChange={e => onChangeHandler(e.target.value)}
    >
      <option value="" default>
        Select a date
      </option>
      {movies &&
        movies.map((movie, i) => (
          <optgroup label={movie.title} key={i}>
            {movie.dates &&
              movie.dates.map(date => (
                <option>{`${displayDateCorrectly(date.date)} ${displayFilmTime(
                  date.date
                )}`}</option>
              ))}
          </optgroup>
        ))}
    </select>
  </div>
);

export default SelectDate;
