// slice.js
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllMoviesTrending,
  fetchAllMovies,
  fetchDefaultMovies,
  fetchPopularActors,
} from './thunks';

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
  allMovies: [],
  defaultMovies: [],
  popularActors: [],

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
      .addCase(fetchAllMoviesTrending.rejected, handleRejected)
      .addCase(fetchAllMovies.pending, handlePending)
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.allMovies = action.payload;
        const { page, results, total_pages } = action.payload;
        state.page = page;
        state.results = page === 1 ? results : [...state.results, ...results];
        state.total_pages = total_pages;
      })
      .addCase(fetchAllMovies.rejected, handleRejected)

      .addCase(fetchDefaultMovies.pending, handlePending)
      .addCase(fetchDefaultMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.defaultMovies = action.payload;
        const { page, results, total_pages } = action.payload;
        state.page = page;
        state.results = page === 1 ? results : [...state.results, ...results];
        state.total_pages = total_pages;
      })
      .addCase(fetchDefaultMovies.rejected, handleRejected)

      .addCase(fetchPopularActors.pending, handlePending)
      .addCase(fetchPopularActors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.popularActors = action.payload.results; // Сохраняем только массив актеров
        state.page = action.payload.page;
      })
      .addCase(fetchPopularActors.rejected, handleRejected);
  },
});

export default moviesSlice.reducer;
