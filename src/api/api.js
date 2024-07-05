// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '0649efc971b913d6bfebf656f94b5c92',
  // language: 'en-US',
};

export const getAllMoviesTrending = async (page, language, limit) => {
  //   const { data } = await axios(`3/trending/movie/day`, {
  const response = await axios(`3/trending/movie/day`, {
    params: {
      page: page,
      limit: limit,
      //   api_key: '0649efc971b913d6bfebf656f94b5c92',
      //   language: 'en-US',
      // language: 'uk-UA',
      language: language,
    },
  });
  // console.log('getAllMoviesTrending=', data);
  return response.data.results;
  // return data;
};

export const getMoviesTrending = async (moveId, language) => {
  const { data } = await axios(`3/movie/${moveId}`, {
    params: {
      language: language,
    },
  });
  // console.log('getMoviesTrending=', data);
  return data;
};

export const getCast = async (moveId, language) => {
  const { data } = await axios(`3/movie/${moveId}/credits`, {
    params: {
      language: language,
    },
  });
  // console.log('Cast=', data);
  return data;
};

export const getReviews = async (moveId, language) => {
  const { data } = await axios(`3/movie/${moveId}/reviews`, {
    params: {
      language: language,
    },
  });
  // console.log('Reviews =', data);
  return data;
};

export const getVideos = async (moveId, language) => {
  const { data } = await axios(`3/movie/${moveId}/videos`, {
    params: {
      language: language,
    },
  });
  // console.log('videos=', data);
  return data;
};

export const getAllMovies = async (value, page, language, limit) => {
  const { data } = await axios(`3/search/movie`, {
    params: {
      page: page,
      limit,
      // api_key: '0649efc971b913d6bfebf656f94b5c92',
      // // language: 'en-US',
      // original_language: 'en-US',
      // query: `Jack + Reacher`,
      query: `${value}`,
      language: language,
    },
  });
  // console.log(value);
  // console.log('getAllMovies=>>', data);
  return data;
};

export const getDefaultMovies = async (page, language, limit) => {
  const response = await axios.get(`3/movie/popular`, {
    params: {
      page,
      language,
      limit: limit,
    },
  });

  return response;
};
