import React from 'react';
import NumberOfPresents from 'containers/NumberOfPresents';
import styles from './profiles.css';

const ProfileItem = ({
  user: {
    name,
    avatar,
    _id
  } = {},
  handle,
  company,
  website,
  location,
  bio,
  status,
  occasions,
  skills,
  social,
}) => (
  <div className={styles.containerSmall}>
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src={avatar} alt={handle} />
        </div>
        <div className={styles.handle}>
          <h2>{handle}</h2>
        </div>
      </div>
      <div className={styles.middle}>
        <p>{bio}</p>
        <p className={styles.present}>
          <span>{'Expects to recieve '}</span>
          <span>
            <NumberOfPresents id={_id} />
          </span>
          <span>{' presents'}</span>
        </p>
        <p className={styles.present}>
          <span>{'For total of '}</span>
          <span>
            {occasions}
          </span>
          <span>{' occasions'}</span>
        </p>
      </div>
      {/* <div className={styles.bottom}>
        <h3>Wants presents at following occasions:</h3>
        {occasions ? occasions.map(item => (
          <p>{item.title}</p>
        )): <span>No occasions created</span>}
      </div> */}
    </div>      
  </div>
);

export default ProfileItem;
