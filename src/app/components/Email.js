 "use client";
import styles from '../styles/Header.module.scss';
 export default function Email() { 
 return(
  <div className={styles.email}>
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
 <div className={styles.inputContainer}>
  <input
    type="email"
    placeholder="Email address"
    className={styles.emailInput}
  />
  <button className={styles.getStarted}>Get Started</button>
</div>
  </div>
 )
 }