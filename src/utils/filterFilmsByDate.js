import React from 'react';

import { displayDateCorrectly } from "../utils/displayDateCorrectly";
import { displayFilmTime } from "../utils/displayFilmTime";

export const filterFilmsByDate = (movies, date) => {
    return movies.filter(movie => {
        console.log(filterDate(movie.dates, date));
        //console.log(filterDate(movie.dates, date));
        return movie.dates === filterDate(movie.dates, date);
    }); 
};

const filterDate = (dates, neededDate) => {
    return dates.filter(date => {
        let dateStr = displayDateCorrectly(date.date).toString() + ' ' + displayFilmTime(date.date).toString();
        return dateStr === neededDate.toString();
    });
};