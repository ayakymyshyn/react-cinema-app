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
    let daysForNav = ["Today"];
    let currentDay = new Date().getDay() + 1;

    days.map((day, idx) => idx >= currentDay && daysForNav.push(day));
    days.map(day => !daysForNav.includes(day) && daysForNav.push(day));
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
