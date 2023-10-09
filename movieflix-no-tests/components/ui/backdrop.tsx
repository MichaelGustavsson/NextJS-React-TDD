import { useEffect } from 'react';
import styles from './backdrop.module.css';

export default function Backdrop({ imagePath }) {
  const imageUrl = `url(${imagePath})`;

  useEffect(() => {
    document.documentElement.style.setProperty('--backgroundImage', imageUrl);
  }, []);

  return <div className={styles.backdrop}></div>;
}
