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
  // console.log('videos=', data);
  return data;
};
// export const getAllMovies = async (value, page, language) => {
//   const { data: firstBatch } = await axios(`3/search/movie`, {
//     params: {
//       page,
//       query: value,
//       language,
//     },
//   });
//   const { data: secondBatch } = await axios(`3/search/movie`, {
//     params: {
//       page: page + 1,
//       query: value,
//       language,
//     },
//   });
//   const combinedResults = {
//     ...firstBatch,
//     results: [...firstBatch.results, ...secondBatch.results],
//   };

//   return combinedResults;
// };

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
