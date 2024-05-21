import React from 'react';
import styles from './Card.module.css';

function Card({ time, name }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexbox}>
        <h1>{time}</h1>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Card