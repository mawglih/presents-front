import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

export default () => (
  <div
    className={styles.header}
  >
    <div className={styles.left}>Left</div>
    <div className={styles.right}>
      <div>
        <Link to='/signin'>
          <span>Sign In</span>
        </Link>
      </div>
      <div>
        <Link to='/signup'>
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  </div>
);
