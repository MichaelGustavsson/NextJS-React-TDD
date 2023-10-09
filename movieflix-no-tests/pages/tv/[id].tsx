import { getTVSerie } from '@/data/tv';
import { useRouter } from 'next/router';

import styles from '@/styles/details.module.css';
import Button from '@/components/ui/button';
import StarIcon from '@/components/icons/star-icons';
import Backdrop from '@/components/ui/backdrop';
import PlayIcon from '@/components/icons/play-icons';
import Link from 'next/link';

export default function MovieDetailPage() {
  const router = useRouter();
  const tvId = router.query.id;
  const movie = getTVSerie(+tvId);

  return (
    <>
      <Backdrop imagePath={movie?.background} />
      <div className={styles.detailsTop}>
        <div>
          <img className={styles.img} src={movie?.poster} />
          <span className={styles.icon}>
            <Link href='/streaming'>
              <PlayIcon />
            </Link>
          </span>
        </div>
        <div>
          <h2>{movie?.title}</h2>
          <p className='text-muted'>Premiär: {movie?.releasedate}</p>
          <p>{movie?.overview}</p>
        </div>
      </div>
      <div className='actions'>
        <Button link='/'>
          <span>Lägg till favoriter </span>
          <span className='icon'>
            <StarIcon />
          </span>
        </Button>
      </div>
    </>
  );
}
