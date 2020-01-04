import { GET_MOVIES } from "./../actions/getMovies";
import { GET_SINGLE_MOVIE } from "./../actions/getSingleMovie";
import { SET_SEATS } from "./../actions/setSeats";
import { REMOVE_SEAT } from "./../actions/removeSeat";
import { CLEAN_SEATS_ARRAY } from "./../actions/cleanSeatsArray";

const moviesState = {
  movies: [],
  movie: {},
  selectedSeats: []
};

const moviesReducer = (state = moviesState, action) => {
  const { type, movies, movie, seats, seat } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        movie
      };
    case SET_SEATS:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, seats]
      };
    case REMOVE_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats.filter(val => val.seat !== seat)]
      };
    case CLEAN_SEATS_ARRAY:
      return {
        ...state,
        selectedSeats: []
      };
    default:
      return state;
  }
};

export default moviesReducer;
