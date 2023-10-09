import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} href='/'>
          MovieFlix
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/movies'>Filmer</Link>
            </li>
            <li>
              <Link href='/tv'>Serier</Link>
            </li>
            <li>
              <Link href='/auth'>logga in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
