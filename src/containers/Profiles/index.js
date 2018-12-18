import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import {
  getProfilesStart,
} from 'actions/profile';
import styles from './profiles.css';

class Profiles extends Component {

  componentDidMount() {
    const {
      getProfilesStart,
    } = this.props;
    getProfilesStart();
  }

  render() {
    const {
      profiles,
      loading
    } = this.props.profile;
    let ProfileItems;
    if(profiles === null || loading) {
      ProfileItems = <PulseLoader />
    } else {
      if(profiles.length > 0) {
        ProfileItems = <h1>Profiles are here</h1>
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

export default connect(mapStateToProps, { getProfilesStart })(Profiles)
