// reducer.js
import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from './slice';

export const reducer = combineReducers({
  movies: moviesReducer,
});
