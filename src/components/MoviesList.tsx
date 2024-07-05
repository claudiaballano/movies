import { Grid } from "@mui/material";
import type { Movie, MoviesList } from "../domain/types";
import MovieCard from "./MovieCard";

export default async function MoviesList({
  moviesList,
}: {
  moviesList: MoviesList;
}) {
  return (
    <>
      <Grid container spacing={2}>
        {moviesList.movies.map((movie: Movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={2}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              image={movie.image}
              rating={movie.rating}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
