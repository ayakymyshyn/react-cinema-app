import { GET_MOVIES } from "./../actions/getMovies";
import { GET_SINGLE_MOVIE } from "./../actions/getSingleMovie";
import { SET_SEATS } from "./../actions/setSeats";
import { REMOVE_SEAT } from "./../actions/removeSeat";
import { CLEAN_SEATS_ARRAY } from "./../actions/cleanSeatsArray";
import { SET_BOOK_STATUS } from "./../actions/setBookStatus";

const moviesState = {
  movies: [],
  movie: {},
  selectedSeats: [],
  isOk: false,
  loaded: false,
  movieLoaded: false,
};

const moviesReducer = (state = moviesState, action) => {
  const { type, movies, movie, seats, seat, status, loaded, movieLoaded } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies,
        loaded, 
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        movie,
        movieLoaded
      };
    case SET_SEATS:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, seats]
      };
    case REMOVE_SEAT:
      return {
        ...state,
        selectedSeats: [
          ...state.selectedSeats.filter(val => val.seatNum !== seat)
        ]
      };
    case CLEAN_SEATS_ARRAY:
      return {
        ...state,
        selectedSeats: []
      };
    case SET_BOOK_STATUS:
      return {
        ...state,
        isOk: status
      };
    default:
      return state;
  }
};

export default moviesReducer;
