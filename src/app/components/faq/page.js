'use client';
import { useState } from 'react';
import styles from '../styles/FAQ.module.scss';
import Email from '../email/page';
import faqData from '../../db/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.item}>
          <button onClick={() => setOpenIndex(index === openIndex ? null : index)}>
            {item.question} <span>{openIndex === index ? '✕' : '+'}</span>
          </button>
          <div className={`${styles.answer} ${openIndex === index ? styles.show : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    
    
  );
}
