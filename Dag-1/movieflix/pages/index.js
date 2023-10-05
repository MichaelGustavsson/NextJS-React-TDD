import Navbar from '@/components/layout/navbar';
import { getAllMovies } from '@/data/movies';

const HomePage = () => {
  const movies = getAllMovies();
  console.log(movies);

  return (
    <section>
      <h1>MovieFlix</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.title}</div>
          <img src={movie.poster} />
        </div>
      ))}
    </section>
  );
};

export default HomePage;
