import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import styles from './occasion.css';

const Occasion = ({
  id,
  title,
  description,
  date,
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
          <Link to={`/editoccasion/${id}`}>
            <h4>{title}</h4>
          </Link>
      </div>
      <div className={styles.content}>
        
        <p><span>Description: </span>{description}</p>
        <p>
          <span>Date of occasion: </span>
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
      </div>
      <button
        className={styles.button}
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  )
}

export default Occasion
