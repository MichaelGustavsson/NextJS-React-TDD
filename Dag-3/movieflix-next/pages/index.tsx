import MoviesPage from './movies';

import { getAllMovies } from '@/__mock__/data/movies';

export default function HomePage() {
  const movies = getAllMovies();
  return (
    <div>
      <section>
        <h1>Välkommen till MovieFlix</h1>
        <p>Vi erbjuder de senaste filmerna och TV-serierna</p>
      </section>
      <hr />
      <MoviesPage movies={movies} />
    </div>
  );
}
