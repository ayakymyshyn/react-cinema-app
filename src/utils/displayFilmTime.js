export const displayFilmTime = date => {
  date = new Date(Date.parse(date));
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${hour}:${minutes}`;
};
