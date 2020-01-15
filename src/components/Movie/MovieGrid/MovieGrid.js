import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import AdsSidebar from "./AdsSidebar";

const MovieGrid = ({ movies }) => (
  <section className="portfolio-area">
    <div className="container">
      <div className="section-title">
        <h1>
          <i className="icofont icofont-movie"></i> Spotlight This Month
        </h1>
      </div>
      <div className="row flexbox-center">
        <div className="col-lg-6 text-center text-lg-left"></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-9">
          <div className="row portfolio-item">
            {movies.map(movie => (
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
