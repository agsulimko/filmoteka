// thunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMoviesTrending } from 'api/api';

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
      for (let i = 1; i <= page; i++) {
        const pageResults = await getAllMoviesTrending(i, language);
        results.push(...pageResults);
      }
      return { page: 1, results, total_pages: 1000, total_results: 20000 };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
