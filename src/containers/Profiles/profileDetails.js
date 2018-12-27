import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getProfileByHandleStart,
} from 'actions/profile';
import {
  getPresentsByUserStart,
} from 'actions/presents';
import PresentsPublic from './presentsPublic';
import ProfileHeader from 'components/Profiles/ProfileHeader';
import ProfileDetails from 'components/Profiles/ProfileDetails';
import ProfileOccasions from 'components/Profiles/ProfileOccasions';
import styles from './profiles.css';

export class profileDetails extends Component {

  componentDidMount() {
    const {
      getProfileByHandleStart,
      getPresentsByUserStart,
      match,
    } = this.props;
    getProfileByHandleStart(match.params.id);
    getPresentsByUserStart(match.params.id);
  }

  render() {
    const {
      podarki,
      current,
      loading,
    } = this.props;

    return (
      <div className={styles.container}>
        <h1>
          {/* {`Hello dear ${handle}`} */}
        </h1>
        <div className={styles.contentHor}>
          <div className={styles.profile}>
            <div>
              <ProfileHeader
                profile={current}
                loading={loading}
              />
            </div>          
            <div>
              <ProfileDetails
                profile={current}
                loading={loading}
              />
            </div>
            <div>
              <ProfileOccasions
                profile={current}
                loading={loading}
              />
            </div>
          </div>
          <div className={styles.presents}>
            <PresentsPublic
              presents={podarki}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  current: state.profile.current,
  loading: state.profile.loading,
  podarki: state.getPresents,
});


export default connect(mapStateToProps, {
  getProfileByHandleStart,
  getPresentsByUserStart,
})(profileDetails);
