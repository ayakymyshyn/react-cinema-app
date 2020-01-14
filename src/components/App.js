import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Slider from "./Slider/Slider";
import MovieGrid from "./Movie/MovieGrid/MovieGrid";
import MovieDetails from "./Movie/MovieDetails/MovieDetails";
import Sector from "./Booking/Sector/Sector";

import getMovies from "../redux/actions/getMovies";

const App = props => {
  const [date] = useState(null);

  useEffect(() => {
    props.getMovies();
  }, []);

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
                <MovieGrid movies={props.movies} />
              </React.Fragment>
            )}
          />
          <Route path="/movie/:movieId" component={MovieDetails} />
          <Route path="/seats" component={Sector} />
          <Route path="*" render={() => <h2>404</h2>} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({ movies: state.moviesReducer.movies });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
