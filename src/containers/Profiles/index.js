import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import {
  getProfilesStart,
  clearCurrentProfile,
} from 'actions/profile';
import {
  getPresentsByUserStart,
} from 'actions/presents';
import ProfileItem from './profileItem';
import styles from './profiles.css';

class Profiles extends Component {

  componentDidMount() {
    const {
      getProfilesStart,
    } = this.props;
    getProfilesStart();
  }
  componentWillUnmount() {
    const {
      clearCurrentProfile
    } = this.props;
    clearCurrentProfile();
    
  }

  render() {
    const {
      loading,
      profiles,
    } = this.props.profile;
    let ProfileItems;
    if(profiles === null || loading) {
      ProfileItems = (
        <div className={styles.loading}>
          <PulseLoader size={70} margin="4px" />
        </div>
      )
    } else {
      if(profiles.length > 0) {
        ProfileItems = profiles.map(item => (
          <ProfileItem
            key={item._id}
            skills={item.skills}
            user={item.user}
            company={item.company}
            website={item.website}
            bio={item.bio}
            status={item.status}
            occasions={item.occasions.length}
            handle={item.handle}
          />
        ))
      } else {
        ProfileItems = <h4>No profiles found...</h4>
      }
    }
    return (
      <div className={styles.container}>
        {ProfileItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, {
  getProfilesStart,
  getPresentsByUserStart,
  clearCurrentProfile,
})(Profiles)
