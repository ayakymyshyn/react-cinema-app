// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Other
import getMovies from '../../redux/actions/getMovies';

export const useMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const {
    movies, isOk, selectedSeats, movie, loaded,
  } = useSelector((state) => ({
    movies: state.moviesReducer.movies,
    isOk: state.moviesReducer.isOk,
    selectedSeats: state.moviesReducer.selectedSeats,
    movie: state.moviesReducer.movie,
    loaded: state.moviesReducer.loaded,
  }));

  useEffect(() => {
    fetchMovies();
  }, [dispatch]);

  return {
    movies,
    isOk,
    selectedSeats,
    movie,
    loaded,
  };
};
