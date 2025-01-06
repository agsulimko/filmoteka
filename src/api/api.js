// api.js
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '0649efc971b913d6bfebf656f94b5c92',
  // language: 'en-US',
};

export const getTopRatedMovies = async (page, language, limit) => {
  try {
    const { data } = await axios.get('3/movie/top_rated', {
      params: {
        page: page,
        limit: limit,
        language: language,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
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
  // console.log('getAllMoviesTrending=', response);
  // return response.data.results;
  return response;
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

  return data;
};

export const getAllMovies = async (value, page, language, limit) => {
  const response = await axios(`3/search/movie`, {
    params: {
      // query,
      // page,
      // language,
      page: page,
      limit: limit,
      language: language,
      query: value,
    },
  });

  return response;
};

export const getDefaultMovies = async (page, language, limit) => {
  const response = await axios.get(`3/movie/popular`, {
    params: {
      // page,
      // language,
      // limit: limit,
      page: page,
      limit: limit,
      language: language,
    },
  });
  // console.log('getDefaultMovies=', response);
  return response;
};

// Получение списка популярных актеров
export const getPopularActors = async (page, language) => {
  const response = await axios.get(`3/person/popular`, {
    params: {
      page: page,
      language: language,
    },
  });
  console.log('getPopularActors =', response);
  return response.data.results; // Возвращаем только массив актеров
};

// Получение списка фильмов актера
export const getActorMovies = async (actorId, language = 'en-US') => {
  const response = await axios.get(`3/person/${actorId}/movie_credits`, {
    params: {
      language,
    },
  });
  return response.data.cast; // Возвращаем только список фильмов
};
