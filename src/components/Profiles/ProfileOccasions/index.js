import React from 'react';
import { PulseLoader } from 'react-spinners';
import styles from '../profiles.css'

const ProfileOccasions = ({
  profile,
  loading,
}) => {
  return (
    <div>
      { profile && !loading ? (
        <div className={styles.content}>
          <h2>{`I expect presents for ${profile.occasions.length} occasions: `}</h2>
          {profile.occasions.map(item => (
            <h4  key={item._id}>{item.title}</h4>
          ))}
        </div>

      ) : (
        <PulseLoader/>
      )}
    </div>
  );
};

export default ProfileOccasions;
