import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  logoutStart,
} from 'actions';
import styles from './header.css';

const HeaderNotAuth = () => (
  <div
    className={styles.header}
  >
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
  </div>
);

const HeaderAuth = ({
  username,
  handleLogout,
}) => (
  <div
    className={styles.header}
  >
    <div className={styles.left}>Welcome to Presents, {username}</div>
    <div className={styles.right}>
      <div
        onClick={handleLogout}
      >
        <span>Logout</span>
      </div>
    </div>
  </div>
);

 class Header extends Component {

  logout = () => {
    const {
      logoutStart
    } = this.props;
    logoutStart();
  }
  

  render() {
    const {
      auth,
      user,
    } = this.props;
    return(
      <div>
        { auth ? <HeaderAuth username={user} handleLogout={this.logout} /> : <HeaderNotAuth /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.signin.isAuthenticated,
  user: state.signin.user,
});
export default connect(mapStateToProps, { logoutStart })(Header);
