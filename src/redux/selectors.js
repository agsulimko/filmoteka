// selector.js;
// export const selectMovies = state => state.movies.results;

// export const selectAllMovies = state => state.movies.results;
// export const selectDefaultMovies = state => state.movies.results;
export const selectMovies = state => state.movies.movies.results;
export const selectAllMovies = state => state.movies.allMovies.results;
export const selectDefaultMovies = state => state.movies.defaultMovies.results;
export const selectLoading = state => state.movies.isLoading;
export const selectTotalPagesAllMoviesTrending = state =>
  state.movies.total_pages;
// export const selectTotalPagesAllMovies = state => state.movies.total_pages;
// export const selectTotalPagesDefaultMovies = state => state.movies.total_pages;
export const selectTotalPages = state => state.movies.total_pages;

export const selectPopularActors = state => state.movies.popularActors;
