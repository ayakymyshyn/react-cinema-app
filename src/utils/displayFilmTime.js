export const displayFilmTime = date => {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${hour}:${minutes}`
};