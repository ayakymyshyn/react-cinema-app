export const getMovie = (movies, target) => {
    return movies.filter(movie => {
      console.log(movie.title.toLowerCase().replace(/ /g, "-") === target);
      return movie.title.toLowerCase().replace(/ /g, "-") === target;
    });
  };