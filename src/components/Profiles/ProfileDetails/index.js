import React from 'react';
import { PulseLoader } from 'react-spinners';
import styles from '../profiles.css'

const ProfileDetails = ({
  profile,
  loading,
}) => {
  return (
    <div>
      { profile && !loading ? (
        <div className={styles.details}>
          <h3>{profile.skills}</h3>
        </div>

      ) : (
        <PulseLoader/>
      )}
      
    </div>
  );
};

export default ProfileDetails;
