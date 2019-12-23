export const getMovie = (movies, target) => {
    return movies.filter(movie => {
      return movie.title.toLowerCase().replace(/ /g, "-") === target;
    });
  };