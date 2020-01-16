import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/slicknav.min.css";
import "../css/responsive.css";
import "../css/icofont.css";

import Slider from "./Slider/Slider";
import MovieGrid from "./Movie/MovieGrid/MovieGrid";
import MovieDetails from "./Movie/MovieDetails/MovieDetails";
import Sector from "./Booking/Sector/Sector";
import DownloadTicket from "./Movie/MovieTicket/DownloadTicket";

import getMovies from "../redux/actions/getMovies";

const App = props => {
  useEffect(() => {
    props.getMovies();
  }, []);

  return (
    <Router>
      <div className="main-app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Slider movie={props.movies[0]} />
                <MovieGrid movies={props.movies} />
              </React.Fragment>
            )}
          />
          <Route path="/movie/:movieId" component={MovieDetails}>
            {props.isOk && <Redirect to="/download-ticket" />}
          </Route>
          <Route path="/seats" component={Sector} />
          <Route
            render={() => (
              <DownloadTicket
                title={props.movie.title}
                movieId={props.movie._id}
                selectedSeats={props.selectedSeats}
              />
            )}
          />
          <Route path="*" render={() => <h2>404</h2>} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
  isOk: state.moviesReducer.isOk,
  selectedSeats: state.moviesReducer.selectedSeats,
  movie: state.moviesReducer.movie
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
