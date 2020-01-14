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
      movies.map(movie => <MovieCard movie={movie} stringDate={stringDate} />)
    ) : (
      <h2>Oops! There is no films at this moment</h2>
    )}
  </div>
);

export default MovieGrid;
