import Link from 'next/link';
import styles from './list-item.module.css';

export default function ListItem({ item, url }) {
  return (
    <div className={styles.card}>
      <Link href={`${url}/${item.id}`}>
        <img className={styles.poster} src={item.poster} />
      </Link>
      <div className={styles.cardBody}>
        <h5>{item.title}</h5>
        <p>
          <small className='text-muted'>Premiär datum {item.releasedate}</small>
        </p>
      </div>
    </div>
  );
}
