/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React from 'react';
// Other
import T from 'prop-types';
// Components
import MovieCard from '../MovieCard/MovieCard';
import AdsSidebar from './AdsSidebar';

const MovieGrid = ({ movies }) => (
  <section className="portfolio-area">
    <div className="container">
      <div className="section-title">
        <i
          className="icofont icofont-movie"
        />
        <h1>Spotlight This Month</h1>
      </div>
      <div className="row flexbox-center">
        <div className="col-lg-6 text-center text-lg-left" />
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-9">
          <div className="row portfolio-item">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie._id} />
            ))}
          </div>
        </div>
        <AdsSidebar />
      </div>
    </div>
  </section>
);

export default MovieGrid;

MovieGrid.propTypes = {
  movies: T.array.isRequired,
};
