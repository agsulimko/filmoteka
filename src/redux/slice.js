// slice.js
import { createSlice } from '@reduxjs/toolkit';

import { fetchAllMoviesTrending } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.status = 'loading';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.status = 'failed';
};

const initialState = {
  movies: [],
  page: 1,
  results: [],
  total_pages: 0,
  status: '',
  isLoading: false,
  error: null,
};
const moviesSlice = createSlice({
  name: 'movies',

  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchAllMoviesTrending.pending, handlePending)
      .addCase(fetchAllMoviesTrending.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.movies = action.payload;
        const { page, results, total_pages } = action.payload;
        state.page = page;

        state.results = page === 1 ? results : [...state.results, ...results];
        state.total_pages = total_pages;
      })
      .addCase(fetchAllMoviesTrending.rejected, handleRejected);
  },
});

export default moviesSlice.reducer;
