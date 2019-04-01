import React, { Component } from 'react';

import NavigationItem from '../NavigationItem/NavigationItem'

class DateNavigation extends Component {
    
    getDaysData(){
        let days = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let daysForNav = [];
        let currentDay = (new Date).getDay();

        days.forEach((day, idx) => {
            if (idx >= currentDay){
                daysForNav.push(days[idx]);
            }
        });

        if (daysForNav.length < 7) {
            let cnt = 7 - daysForNav.length;
            for (let i = 0; i < cnt; i++){
                daysForNav.push(days[i]);
            }
        } 

        daysForNav[0] = 'Today';
        return daysForNav;
    }
    render(){
        return this.getDaysData().map((day, idx) => {
            return <NavigationItem key={idx} value={day}/>
        })
    }
   
}

export default DateNavigation;