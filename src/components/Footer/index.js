import React from 'react';
import styles from './footer.css';

const Footer = () => (
  <div className={styles.footer}>
    <span>&copy; {(new Date()).getFullYear()} Oleg Markoff</span>
  </div>
);

export default Footer;
