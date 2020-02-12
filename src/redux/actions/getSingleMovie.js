import { ACTIONS } from "./../constants";

export const getSingleMovie = match => {
  let movieLoaded = false;

  // TODO: add try/catch block for error handling
  return async dispatch => {
    const res = await fetch(
      `https://afternoon-woodland-86059.herokuapp.com/movies/${match}`
    );

    const movie = await res.json();

    movieLoaded = true;

    return dispatch({
      type: ACTIONS.GET_SINGLE_MOVIE,
      movie,
      movieLoaded
    });
  };
};
