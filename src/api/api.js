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
  console.log("getAllMoviesTrending=",data);
  return data;
};

export const getMoviesTrending = async moveId => {
  const { data } = await axios(`3/movie/${moveId}`, {});
  console.log("getMoviesTrending=",data);
  return data;
};

export const getCast = async moveId => {
  const { data } = await axios(`3/movie/${moveId}/credits`);
  console.log('Cast=', data);
  return data;
};

export const getReviews = async moveId => {
  const { data } = await axios(`3/movie/${moveId}/reviews`);
  console.log('Reviews =', data);
  return data;
};

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

// =============video==================
export const getTrailer = async moveId => {
  try {
    const { data } = await axios(`3/movie/${moveId}/videos`);
    if (data.results.length === 0) {
console.log('No trailer available for this movie.');
      return null;
    }
    const trailerKey = data.results[0].key;
    console.log('getTrailer=>', data);
    console.log('TrailerKey=>', trailerKey);

//     const youtubeApiResponse = await axios.get(
//       `https://www.googleapis.com/youtube/v3/videos?id=${trailerKey}&key=YOUR_YOUTUBE_API_KEY&part=snippet,contentDetails`, {params: {
       
// id: trailerKey,
      
// key: 'YOUR_YOUTUBE_API_KEY',
//       part: 'snippet,contentDetails',
//     }}
//     );



    const youtubeApiResponse = await axios.get(`https://api.themoviedb.org/3/movie/${trailerKey}/videos?$api_key `
      )


    const trailerData = youtubeApiResponse.data;
    console.log('Trailer Data:', trailerData);

    return trailerData;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    throw error;
  }
};
export default getAllMovies;
