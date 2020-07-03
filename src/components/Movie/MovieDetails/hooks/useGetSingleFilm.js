// Core
import { useEffect } from 'react';
// Other
import { useSelector, useDispatch } from 'react-redux';
import { getSingleMovie } from '../../../../redux/actions/getSingleMovie';

export const useGetSingleFilm = (id, cb) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleMovie(id));
    return () => cb && cb(false);
  }, [dispatch]);

  const film = useSelector((state) => state.moviesReducer.movie);
  const movieLoaded = useSelector((state) => state.moviesReducer.movieLoaded);

  const movie = film || {};

  return { movie, movieLoaded };
};
