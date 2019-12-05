import { displayDateCorrectly } from "../utils/displayDateCorrectly";
import { displayFilmTime } from "../utils/displayFilmTime";

export const filterFilmsByDate = (movies, date) => {
  return movies.filter(movie => {
    return filterDate(movie.dates, date).length > 0 && movie;
  });
};

const filterDate = (dates, neededDate) => {
  return dates.filter(date => {
    let dateStr = `${displayDateCorrectly(
      date.date
    ).toString()} ${displayFilmTime(date.date).toString()}`;
    return dateStr === neededDate.toString();
  });
};
