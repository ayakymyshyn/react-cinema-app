export const GET_MOVIES = 'GET_MOVIES';

const getMovies = (movies) => ({
  type: "GET_MOVIES",
  movies,
})

export default getMovies;
