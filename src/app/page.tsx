import LoadingList from "@/components/LoadingList";
import List from "@/components/MoviesList";
import { Suspense } from "react";
import { useUpcomingMoviesList } from "../domain/use-movie";

export default async function Home() {
  const upcomingMovies = await useUpcomingMoviesList();

  return (
    <Suspense fallback={<LoadingList />}>
      <List moviesList={upcomingMovies} />
    </Suspense>
  );
}
