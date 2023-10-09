import List from '@/components/ui/list';
import { getAllTVSeries } from '@/data/tv';

export default function Series() {
  const series = getAllTVSeries();
  console.log(series);
  return (
    <>
      <h2>Populära TV Serier</h2>
      <List items={series} url='/tv' />
    </>
  );
}
