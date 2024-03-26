const BASE_URL = 'https://api.themoviedb.org/3';
export const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular`;
export const MOVIE_SEARCH_URL = `${BASE_URL}/search/movie`;

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face';

export const getDataWithAuth = async (url: string) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });
};
