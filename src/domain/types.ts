export interface MoviesList extends Pagination {
  movies: Movie[] | [];
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  rating: string;
}

export interface Pagination {
  totalPages: number;
  totalResults: number;
}
