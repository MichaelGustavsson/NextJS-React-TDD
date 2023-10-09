import List from '@/components/ui/list';
import { getAllMovies } from '@/data/movies';

export default function Movies() {
  const movies = getAllMovies();
  console.log(movies);
  return (
    <>
      <h2>Populära filmer</h2>
      <List items={movies} url='/movies' />
    </>
  );
}
