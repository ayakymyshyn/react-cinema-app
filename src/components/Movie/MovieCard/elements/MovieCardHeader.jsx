// Core
import React from 'react';
// Other
import T from 'prop-types';

export const MovieCardHeader = ({ background, backgroundSize = 'cover' }) => (
  <div
    className="movie-header"
    style={{ background: `url(${background})`, backgroundSize }}
  />
);

MovieCardHeader.propTypes = {
  background: T.string.isRequired,
  backgroundSize: T.string,
};
MovieCardHeader.defaultProps = {
  backgroundSize: 'cover',
};
