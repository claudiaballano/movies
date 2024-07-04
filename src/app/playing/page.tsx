import LoadingList from "@/components/LoadingList";
import List from "@/components/MoviesList";
import { useNowPlayingMoviesList } from "@/domain/use-movie";
import { Suspense } from "react";

async function page() {
  const nowPlayingMovies = await useNowPlayingMoviesList();
  return (
    <Suspense fallback={<LoadingList />}>
      <List moviesList={nowPlayingMovies} />
    </Suspense>
  );
}

export default page;
