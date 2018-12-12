import React from 'react';
import SVGIcon from 'components/SVGIcon';
import { Link } from 'react-router-dom';
import editSVG from './SvgIcons/pen.svg';
import expSVG from './SvgIcons/keyboard.svg';
import eduSVG from './SvgIcons/trophy.svg';
import styles from './profile.css';

export default () => {
  return (
    <div>
      <Link
        to="edit"
        className={styles.actionLinks}
      >
        <SVGIcon
          className={styles.icon}
          icon={editSVG}
        />
        Edit Profile
      </Link>
      <Link
        to="edit"
        className={styles.actionLinks}
      >
      < SVGIcon
          className={styles.icon}
          icon={expSVG}
        />
        Add Experience
      </Link>
      <Link
        to="edit"
        className={styles.actionLinks}
      >
        <SVGIcon
          className={styles.icon}
          icon={eduSVG}
        />
        Add Education
      </Link>
    </div>
  )
};
