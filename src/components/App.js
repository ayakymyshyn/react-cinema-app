import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Slider from "./Slider/Slider";
import SelectDate from "./SelectDate/SelectDate";
import MovieGrid from "./Movie/MovieGrid/MovieGrid";
import MovieDetails from "./Movie/MovieDetails/MovieDetails";
import Sector from './Booking/Sector/Sector';

import { films } from "../mockData/films";
import getShedule from "../redux/actions/getShedule";
import { filterFilmsByDate } from "../utils/filterFilmsByDate";

const App = props => {
  const [date, setDate] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(films);
    console.log('useffect'); // will receive info from server
  }, []);
  console.log(typeof date);
  return (
    <Router>
      <div className="main-app">
        <div className="main-app__nav">
          <Navigation />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Slider />
                <SelectDate movies={films} onChangeHandler={setDate} />
                <MovieGrid
                  movies={date ? filterFilmsByDate(films, date) : movies}
                  stringDate={date}
                />
              </React.Fragment>
            )}
          />
          <Route path="/movie/:movie" component={MovieDetails} />
          <Route path="/seats" component={Sector} />
          <Route path="*" render={() => <h2>404</h2>} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({ date: state.dateReducer.date });
const mapDispatchToProps = dispatch => ({
  getShedule: data => dispatch(getShedule(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
