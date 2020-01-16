export const GET_SINGLE_MOVIE = "GET_SINGLE_MOVIE";

export const getSingleMovie = match => {
  let movieLoaded = false;
  return async dispatch => {
    const res = await fetch(
      `https://afternoon-woodland-86059.herokuapp.com/movies/${match}`
    );
    const movie = await res.json();
    movieLoaded = true;
    return dispatch({
      type: "GET_SINGLE_MOVIE",
      movie,
      movieLoaded
    });
  };
};
