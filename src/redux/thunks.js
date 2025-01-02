// thunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllMoviesTrending,
  getAllMovies,
  getDefaultMovies,
  getPopularActors,
} from 'api/api';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '0649efc971b913d6bfebf656f94b5c92',
  // language: 'en-US',
};

// 40 и более фильмов на странице
export const fetchAllMoviesTrending = createAsyncThunk(
  'movies/fetchAllMoviesTrending',
  async ({ page, language }, { rejectWithValue }) => {
    // try {
    //   const response = await axios.get('3/trending/movie/day', {
    //     params: { page, language },
    //   });
    //   console.log(response.data);
    //   return response.data;
    // }
    try {
      const results = [];
      const response = await getAllMoviesTrending(page, language);
      // console.log(response.data.total_pages);
      // console.log(response.data.total_results);
      for (let i = 1; i <= page; i++) {
        const pageResults = await getAllMoviesTrending(i, language);

        results.push(...pageResults.data.results);
      }

      return {
        page: 1,
        results,
        total_pages: response.data.total_pages,
        total_results: response.data.total_results,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllMovies = createAsyncThunk(
  'movies/fetchAllMovies',
  async ({ query, page, language }, { rejectWithValue }) => {
    try {
      const response = await getAllMovies(query, page, language);

      return {
        page: 1,
        results: response.data.results,
        total_pages: response.data.total_results,
        total_results: response.data.total_results,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchPopularActors = createAsyncThunk(
  'actors/fetchPopularActors',
  async ({ page, language }, { rejectWithValue }) => {
    try {
      const actors = await getPopularActors(page, language); // Убедитесь, что getPopularActors возвращает массив
      return {
        page,
        results: actors,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchDefaultMovies = createAsyncThunk(
  'movies/fetchDefaultMovies',
  async ({ page, language }, { rejectWithValue }) => {
    try {
      const results = [];
      const response = await getDefaultMovies(page, language);
      // console.log(response.data.total_pages);
      // console.log(response.data.total_results);
      for (let i = 1; i <= page; i++) {
        const pageResults = await getDefaultMovies(i, page, language);

        results.push(...pageResults.data.results);
      }

      return {
        page: 1,
        results,
        total_pages: response.data.total_pages,
        total_results: response.data.total_results,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
