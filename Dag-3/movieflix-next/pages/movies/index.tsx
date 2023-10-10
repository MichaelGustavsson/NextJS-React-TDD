export default function MoviesPage({ movies }: Movies) {
  return (
    <div>
      <section>
        <h2>Populära filmer</h2>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div>{movie.title}</div>
            <img src={movie.poster} width='300' alt={movie.title} />
          </div>
        ))}
      </section>
    </div>
  );
}
