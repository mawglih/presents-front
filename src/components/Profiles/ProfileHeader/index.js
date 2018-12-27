import React from 'react';
import { PulseLoader } from 'react-spinners';
import styles from '../profiles.css'

const ProfileHeader = ({
  profile,
  loading,
}) => {
  return (
    <div>
      { profile && !loading ? (
        <div className={styles.header}>
          <img
            src={profile.user.avatar}
            alt={profile.user.name}
            className={styles.image}
          />
          <h3>{profile.handle}</h3>
        </div>

      ) : (
        <PulseLoader/>
      )}
      
    </div>
  );
};

export default ProfileHeader;
