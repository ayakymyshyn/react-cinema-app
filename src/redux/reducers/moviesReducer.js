import { ACTIONS } from "./../constants";

const moviesState = {
  movies: [],
  movie: {},
  selectedSeats: [],
  isOk: false,
  loaded: false,
  movieLoaded: false
};

const moviesReducer = (state = moviesState, action) => {
  const {
    type,
    movies,
    movie,
    seats,
    seat,
    status,
    loaded,
    movieLoaded
  } = action;
  switch (type) {
    case ACTIONS.GET_MOVIES:
      return {
        ...state,
        movies,
        loaded
      };
    case ACTIONS.GET_SINGLE_MOVIE:
      return {
        ...state,
        movie,
        movieLoaded
      };
    case ACTIONS.SET_SEATS:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, seats]
      };
    case ACTIONS.REMOVE_SEAT:
      return {
        ...state,
        selectedSeats: [
          ...state.selectedSeats.filter(val => val.seatNum !== seat)
        ]
      };
    case ACTIONS.CLEAN_SEATS_ARRAY:
      return {
        ...state,
        selectedSeats: []
      };
    case ACTIONS.SET_BOOK_STATUS:
      return {
        ...state,
        isOk: status
      };
    default:
      return state;
  }
};

export default moviesReducer;
