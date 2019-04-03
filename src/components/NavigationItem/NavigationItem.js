import React from "react";
import T from "prop-types";

import "./NavigationItem.scss";

const NavigationItem = ({ value }) => (
  <li className="element">
    <a href="#">{value}</a>
  </li>
);

NavigationItem.propTypes = {
  value: T.string
};

export default NavigationItem;
