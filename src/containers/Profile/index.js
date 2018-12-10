import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import {
  getProfileStart,
} from 'actions/profile';

class Profile extends Component {

  componentDidMount() {
    const {
      getProfileStart,
    } = this.props;
    getProfileStart();
  }
  render() {
    const {
      profile: {
        current,
        loading,
      } ={},
      auth: {
        user,
      } = {},
    } = this.props;
    console.log('profile in component: ', current);
    console.log('loading in component: ', loading);
    console.log('auth in component: ', user);
    let ProfileContent;
    if(current === null || loading) {
      ProfileContent = 
        (<Loader
          type="Circles"
          color="rgb(10, 49, 31)"
          height={80}
          width={80}
        />)
    } else {
      if(Object.keys(current).length > 0) {
        ProfileContent = <h2>Profile</h2>
      } else {
        ProfileContent = (
          <div>
            <h3>You do not have a profile</h3>
            <Link to="/createprofile">
              <h4>Please create a profile</h4>
            </Link>
          </div>
        )
      }
    }

    return (
      <div>
        {ProfileContent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    auth: state.signin,
  };
};

export default connect(mapStateToProps, { getProfileStart })(Profile);
