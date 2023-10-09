import styles from '@/pages/index.module.css';

export default function Home() {
  return (
    <div className={styles.landing}>
      <section className={styles.content}>
        <h1 className='page-title'>Välkommen till MovieFlix</h1>
        <p>Vi erbjuder de senaste filmerna och TV-serierna</p>
      </section>
    </div>
  );
}
