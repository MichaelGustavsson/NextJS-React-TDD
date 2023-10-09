import ListItem from './list-item';
import styles from './list.module.css';

export default function List({ items, url }) {
  console.log(url);
  return (
    <section className={styles.grid}>
      {items.map((item) => (
        <ListItem key={item.id} item={item} url={url} />
      ))}
    </section>
  );
}
