import React from "react";

import { displayDateCorrectly } from "../utils/displayDateCorrectly";
import { displayFilmTime } from "../utils/displayFilmTime";

export const mapFilmDate = movies => {
  return (
    movies &&
    movies.map((movie, i) => (
      <optgroup label={movie.title} key={i}>
        {movie.dates &&
          movie.dates.map(date => (
            <option>{`${displayDateCorrectly(date.date)} ${displayFilmTime(
              date.date
            )}`}</option>
          ))}
      </optgroup>
    ))
  );
};
