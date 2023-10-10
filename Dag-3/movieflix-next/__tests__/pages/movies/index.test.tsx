import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getAllMovies } from '@/__mock__/data/movies';

import MoviesPage from '@/pages/movies';

let movies: Movie[] = [];

describe('Movies page', () => {
  beforeEach(() => {
    movies = getAllMovies();
    render(<MoviesPage movies={movies} />);
    return movies;
  });

  it('should have a heading with the text "Populära filmer"', () => {
    // render(<MoviesPage movies={[]} />);
    const heading = screen.getByRole('heading', { name: 'Populära filmer' });
    expect(heading).toBeInTheDocument();
  });

  it('should have a list of 20 movies', () => {
    // const movies = getAllMovies();
    expect(movies).toHaveLength(20);
  });

  it('should have a poster', () => {
    // const movies = getAllMovies();
    // render(<MoviesPage movies={movies} />);
    const poster = screen.getByRole('img', { name: movies[0].title });
    expect(poster).toBeInTheDocument();
  });
});
