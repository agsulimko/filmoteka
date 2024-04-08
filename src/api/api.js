import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '0649efc971b913d6bfebf656f94b5c92',
  language: 'en-US',
};

export const getAllMoviesTrending = async () => {
  const { data } = await axios(`3/trending/movie/day`, {
    // params: {
    //   api_key: '0649efc971b913d6bfebf656f94b5c92',
    //   language: 'en-US',
    // },
  });
  console.log('getAllMoviesTrending=', data);
  return data;
};

export const getMoviesTrending = async moveId => {
  const { data } = await axios(`3/movie/${moveId}`, {});
  console.log('getMoviesTrending=', data);
  return data;
};

export const getCast = async moveId => {
  const { data } = await axios(`3/movie/${moveId}/credits`);
  // console.log('Cast=', data);
  return data;
};

export const getReviews = async moveId => {
  const { data } = await axios(`3/movie/${moveId}/reviews`);
  // console.log('Reviews =', data);
  return data;
};

export const getVideos = async moveId => {
  const { data } = await axios(`3/movie/${moveId}/videos`);
  console.log('videos=', data);
  return data;
};

// =============video==================
// export const getTrailer = async moveId => {
//   // const { data } = await axios(`3/movie/${moveId}/homepage`);
//   const { data } = await axios(`3/movie/${moveId}`, {});
//   console.log('homepage(Trailer)=', data);
//   return data;
// };

// ('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=0649efc971b913d6bfebf656f94b5c92');

export const getAllMovies = async value => {
  const { data } = await axios(`3/search/movie`, {
    params: {
      // api_key: '0649efc971b913d6bfebf656f94b5c92',
      // // language: 'en-US',
      // original_language: 'en-US',
      // query: `Jack + Reacher`,
      query: `${value}`,
    },
  });
  // console.log(value);
  console.log('getAllMovies=>>', data);
  return data;
};
