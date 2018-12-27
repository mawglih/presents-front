import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import styles from './profiles.css';

export default ({
  title,
  url,
  image,
  price,
  description,
  occasion,
  date,
  id,
  onPresentSelect,
  onPresentDeselect,
  onPresentBuy,
  userid,
  user,
}) => (
  <div className={styles.containerSmall}>
    <div className={styles.content}>
      <div className={styles.title}>
        <Link to={`/present/${id}`}>
          <h3>{title}</h3>
        </Link>
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
        <div>
          <span>{'Date of occasion is: '}</span>
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </div>
      </div>
      <div className={styles.price}>
        <span>{'$ '}</span><span>{price}</span>
      </div>
      {user.id !== userid ? 
        (<Fragment>
          <div>
            <button
              onClick={onPresentSelect}
            >
              {'Select this present'}
            </button>
          </div>
          <div>
            <button
              onClick={onPresentDeselect}
            >
              {'Deselect this present'}
            </button>
          </div>
          <div>
            <button
              onClick={onPresentBuy}
            >
              {'Buy this present'}
            </button>
          </div>
        </Fragment>) : null
      }
    </div>
  </div>
);
