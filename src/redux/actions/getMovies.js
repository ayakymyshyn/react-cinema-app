export const GET_MOVIES = "GET_MOVIES";

const getMovies = () => {
  return async dispatch => {
    const res = await fetch("https://afternoon-woodland-86059.herokuapp.com/movies");
    const movies = await res.json();
    return dispatch({
      type: "GET_MOVIES",
      movies,
    })
  }
};

export default getMovies;
