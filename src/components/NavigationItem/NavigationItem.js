import React from "react";
import T from "prop-types";

const NavigationItem = ({ value }) => (
  <li>
    <a href="#">{value}</a>
  </li>
);

NavigationItem.propTypes = {
  value: T.string
};

export default NavigationItem;
