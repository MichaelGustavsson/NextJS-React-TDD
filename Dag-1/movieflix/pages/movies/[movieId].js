import { useRouter } from 'next/router';

const MovieDetailsPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  const movieId = router.query.movieId;

  return (
    <>
      <h1>Filmens information!</h1>
      <h2>Filmens id: {movieId}</h2>
    </>
  );
};

export default MovieDetailsPage;
