'use client';
import styles from '../styles/Header.module.scss';
import Email from './Email';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.overlay}>
        <nav>
          <img src="images/netflixLogo.png" alt="Netflix" className={styles.logo} />
          <div className={styles.right}>
            <select className={styles.language}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
            <button className={styles.signIn}>Sign In</button>
          </div>
        </nav>
        <div className={styles.hero}>
          <h1>Unlimited movies, TV <br />shows and more</h1>
          <h2>Starts at ₹149. Cancel at any time.</h2>
         <Email />

        </div>
      </div>
    </div>
  );
}
