import { ACTIONS } from "./../constants";

const getMovies = () => {
  let loaded = false;
  return async dispatch => {
    const res = await fetch(
      "https://afternoon-woodland-86059.herokuapp.com/movies"
    );
    const movies = await res.json();
    loaded = true;
    return dispatch({
      type: ACTIONS.GET_MOVIES,
      movies,
      loaded
    });
  };
};

export default getMovies;
