import { getNowPlayingMovies, getPopularMovies, getTrendingMovies, getUpcomingMovies } from "../api/movies";
import { MovesApiResponse } from "../api/types";
import { MoviesList } from "./types";

function mapMoviesList(response: MovesApiResponse): MoviesList {
  return {
    movies: response.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      year: movie.release_date,
      rating: movie.vote_average.toFixed(1),
    })),
    totalPages: response.total_pages,
    totalResults: response.total_results,
  };
}
async function usePopularMoviesList(): Promise<MoviesList> {
  try {
    const response = await getPopularMovies();
    return mapMoviesList(response);
  } catch {
    console.error("ERROR: Failed to fetch popular movies list.");
    return { movies: [], totalPages: 0, totalResults: 0 };
  }
}

async function useUpcomingMoviesList(): Promise<MoviesList> {
  try {
    const response = await getUpcomingMovies();
    return mapMoviesList(response);
  } catch {
    console.error("ERROR: Failed to fetch upcoming movies list.");
    return { movies: [], totalPages: 0, totalResults: 0 };
  }
}

async function useTrendingMoviesList(): Promise<MoviesList> {
  try {
    const response = await getTrendingMovies();
    return mapMoviesList(response);
  } catch {
    console.error("ERROR: Failed to fetch trending movies list.");
    return { movies: [], totalPages: 0, totalResults: 0 };
  }
}

async function useNowPlayingMoviesList(): Promise<MoviesList> {
  try {
    const response = await getNowPlayingMovies();
    return mapMoviesList(response);
  } catch {
    console.error("ERROR: Failed to fetch now playing movies list.");
    return { movies: [], totalPages: 0, totalResults: 0 };
  }
}


export { useNowPlayingMoviesList, usePopularMoviesList, useTrendingMoviesList, useUpcomingMoviesList };


