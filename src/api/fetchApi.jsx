import axios from 'axios';

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {};
axios.defaults.params['api_key'] = API_KEY;
axios.defaults.params['language'] = 'en-US';

export const fetchTrendingApi = async () => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: { page: 1 },
  });
  return data;
};

export const fetchSearchApi = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: { query, include_adult: false, page: 1 },
  });
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const fetchMovieGenres = async () => {
  const { data } = await axios.get(`/genre/movie/list`);
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const fetchReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: { page: 1 },
  });
  return data;
};
