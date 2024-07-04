import LoadingList from "@/components/LoadingList";
import List from "@/components/MoviesList";
import { usePopularMoviesList } from "@/domain/use-movie";
import { Suspense } from "react";

async function page() {
  const upcomingMovies = await usePopularMoviesList();
  return (
    <Suspense fallback={<LoadingList />}>
      <List moviesList={upcomingMovies} />
    </Suspense>
  );
}

export default page;
