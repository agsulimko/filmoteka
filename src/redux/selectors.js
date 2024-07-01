// selector.js;
export const selectMovies = state => state.movies.results;

export const selectLoading = state => state.movies.isLoading;

export const selectTotalPages = state => state.movies.total_pages;
