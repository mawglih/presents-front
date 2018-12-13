import React from 'react';
import styles from './present.css';

export default ({
  title,
  url,
  image,
  price,
  description,
  occasion,
}) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.image}>
        <img
          src={image}
          alt={title}
        />
      </div>
      <div className={styles.url}>
        <span>Can be found here: </span>
        <span>
          <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
        </span>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.occasion}>
        <span>For the following occasion: </span>
        <span>{occasion}</span>
      </div>
      <div className={styles.price}>
        <span>{'$ '}</span><span>{price}</span>
      </div>
    </div>
  </div>
);
