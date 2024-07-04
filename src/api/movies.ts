import { MovesApiResponse } from "./types";

function getPopularMovies(): Promise<MovesApiResponse> {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

function getUpcomingMovies(): Promise<MovesApiResponse> {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

function getTrendingMovies(): Promise<MovesApiResponse> {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
  ).then((response) => response.json());
}

function getNowPlayingMovies(): Promise<MovesApiResponse> {
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export { getNowPlayingMovies, getPopularMovies, getTrendingMovies, getUpcomingMovies };

