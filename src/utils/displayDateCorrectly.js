export const displayDateCorrectly = date => {
    date = new Date(Date.parse(date));
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    return `${day}.${month}`;
};