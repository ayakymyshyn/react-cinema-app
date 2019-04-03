import React from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import "./DateNavigation.scss";

const DateNavigation = () => {
  const getDaysData = () => {
    let days = [
      "Sunday",
      "Monday",
      "Tusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let daysForNav = [];
    let currentDay = new Date().getDay();

    days.map((day, idx) => idx >= currentDay && daysForNav.push(days[idx]));

    if (daysForNav.length < 7) {
      let cnt = 7 - daysForNav.length;
      for (let i = 0; i < cnt; i++) {
        daysForNav.push(days[i]);
      }
    }

    daysForNav[0] = "Today";
    return daysForNav;
  };
  return (
    <nav className="navbar">
      <ul className="menu">
        {getDaysData().map((day, idx) => {
          return <NavigationItem key={idx} value={day} />;
        })}
      </ul>
    </nav>
  );
};

export default DateNavigation;
