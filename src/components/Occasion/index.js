import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import styles from './occasion.css';

const Occasion = ({
  id,
  title,
  description,
  date,
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
      <div className={styles.buttonDiv}>
        <Link to={`/deleteoccasion/${id}`}>
          <button className={styles.button}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Occasion
