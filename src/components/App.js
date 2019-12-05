import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.scss";

import Slider from "./Slider/Slider";
import SelectDate from "./SelectDate/SelectDate";
import MovieGrid from "./Movie/MovieGrid/MovieGrid";

import { films } from "../mockData/films";
import getShedule from "../redux/actions/getShedule";
import { filterFilmsByDate } from "../utils/filterFilmsByDate";

const App = () => {
  const [date, setDate] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(films); // will receive info from server
  });
  console.log(typeof date);
  return (
    <Router>
      <div className="main-app">
        <div className="main-app__nav">
          <Navigation />
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Slider />
              <SelectDate movies={films} onChangeHandler={setDate} />
              <MovieGrid
                movies={date ? filterFilmsByDate(films, date) : movies}
              />
            </React.Fragment>
          )}
        />
        <Route path="*" render={() => <h2>404</h2>} />
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({ date: state.dateReducer.date });
const mapDispatchToProps = dispatch => ({
  getShedule: data => dispatch(getShedule(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
