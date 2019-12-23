import React from "react";

import MovieCard from "../MovieCard/MovieCard";

const styleCardsWrapper = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  marginTop: "25px"
};

const MovieGrid = ({ movies, stringDate }) => (
  <div style={styleCardsWrapper} className="movie-cards-container">
    {movies ? (
      movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          picture={movie.image}
          seatsAvaible={movie.seatsAvaible}
          date={movie.dates && movie.dates[0].date}
          stringDate={stringDate}
          price={movie.ticketPrice}
        />
      ))
    ) : (
      <h2>Oops! There is no films at this moment</h2>
    )}
  </div>
);

export default MovieGrid;
