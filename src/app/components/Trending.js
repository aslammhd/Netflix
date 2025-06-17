'use client';

import styles from '../styles/Trending.module.scss';

const trendingItems = [
  { id: 1, title: 'The Rookie', img: '/trending/rookie.jpg' },
  { id: 2, title: 'The Royals', img: '/trending/royals.jpg' },
  { id: 3, title: 'Jaat', img: '/trending/jaat.jpg' },
  { id: 4, title: 'Hit', img: '/trending/hit.jpg' },
  { id: 5, title: 'Chhalaava', img: '/trending/chhalaava.jpg' },
  { id: 6, title: 'Rananaidu', img: '/trending/rananaidu.jpg'},
  { id: 7, title: 'Retro', img: '/trending/retro.jpg'},
  { id: 8, title: 'sikandar', img: '/trending/sikandar.jpg'},
  { id: 9, title: 'Thediplomatic', img: '/trending/thediplomatic.jpg'},
  { id: 10, title: 'badugly', img: '/trending/badugly.jpg'}


];

export default function Trending() {
  return (
    <div className={styles.trending}>
      <h2>Trending Now</h2>
      <div className={styles.list}>
        {trendingItems.map(item => (
            <img key={item.id} src={item.img} alt={item.title} className={styles.item} />
        ))}
      </div>
    </div>
  );
}
