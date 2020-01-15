import React from "react";

import { mapFilmDate } from "../../utils/mapFilmDate";

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
      {mapFilmDate(movies)}
      ))}
    </select>
  </div>
);

export default SelectDate;
