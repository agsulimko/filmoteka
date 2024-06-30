// thunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '0649efc971b913d6bfebf656f94b5c92',
  // language: 'en-US',
};
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ page, language }, { rejectWithValue }) => {
    try {
      const response = await axios.get('3/trending/movie/day', {
        params: { page, language },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const fetchFavorites = createAsyncThunk(
//   'adverts/fetchFavorites',
//   async ({ page }, thunkAPI) => {
//     try {
//       const response = await getFavorites(page);

//       return response;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchAutosFavorites = createAsyncThunk(
//   'adverts/fetchAutosFavorites',
//   async (_, thunkAPI) => {
//     try {
//       const response = await getAutosFavorites();

//       return response;
//     } catch (e) {
//       console.log(e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
