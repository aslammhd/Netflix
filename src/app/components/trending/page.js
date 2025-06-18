'use client';

import styles from '../styles/Trending.module.scss';
import trendingItems from '@/app/db/trendingData';


export default function Trending() {
  return (
    <div className={styles.trending}>
      <h2>Trending Now</h2>
      <div className={styles.list}>
        {trendingItems.map(item => (
          <div key={item.id} className={styles.item}>
           <p className={styles.idText}>{item.id}</p>
           <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
