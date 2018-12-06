import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  logoutStart,
} from 'actions';
import styles from './header.css';

 class Header extends Component {

  // componentWillReceiveProps(nextProps) {
  //   const {
  //     history,
  //   } = this.props;
  //   if (!nextProps.isAuthenticated) {
  //     history.push('/');
  //   }
  // }

  render() {
    const {
      auth,
      user,
      logoutStart,
    } = this.props;
    const userNotAuth = (
      <Fragment>
        <div className={styles.left}>Welcome to Presents, please sign in</div>
        <div className={styles.right}>
          <div>
            <Link to='/signin'>
              <span>Sign In</span>
            </Link>
          </div>
          <div>
            <Link to='/signup'>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
    
    const userAuth = (
      <Fragment>
        <div className={styles.left}>Welcome to Presents, dear {user.name}</div>
        <div className={styles.right}>
          <div
            className={styles.logout}
          >
            <img
              src={user.avatar}
              alt={user.name}
              titlw="You should have gravatar associated with your email address"
            />
            <button
              onClick={() => logoutStart()}
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
      </Fragment>
    );
    
    return(
      <div
    className={styles.header}
      >
        { auth.isAuthenticated ? userAuth : userNotAuth }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.signin,
  user: state.signin.user,
});
export default connect(mapStateToProps, { logoutStart })(Header);
