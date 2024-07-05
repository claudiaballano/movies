import LoadingList from "@/components/LoadingList";
import List from "@/components/MoviesList";
import { useTrendingMoviesList } from "@/domain/use-movie";
import { Suspense } from "react";

async function Page() {
  const trendingMovies = await useTrendingMoviesList();
  return (
    <Suspense fallback={<LoadingList />}>
      <List moviesList={trendingMovies} />;
    </Suspense>
  );
}

export default Page;
