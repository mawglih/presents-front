import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getProfileByHandleStart,
} from 'actions/profile';
import {
  getPresentsByUserStart,
} from 'actions/presents';
import PresentsPublic from './presentsPublic';
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
      // current,
    } = this.props;

    return (
      <div className={styles.container}>
        <h1>
          {'Hello'}
        </h1>
        <div className={styles.contentHor}>
          <div className={styles.profile}>
            <div>Profile Header</div>          
            <div>Profile Details</div>
            <div>List of Occasions</div>
          </div>
          <div className={styles.presents}>

            <PresentsPublic  presents={podarki}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  current: state.profile.current,
  podarki: state.getPresents,
});


export default connect(mapStateToProps, {
  getProfileByHandleStart,
  getPresentsByUserStart,
})(profileDetails);
