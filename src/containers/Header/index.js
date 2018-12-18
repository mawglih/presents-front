import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  logoutStart,
} from 'actions';
import {
  clearCurrentProfile,
} from 'actions/profile';
// import SVGIcon from 'components/SVGIcon';
// import usersSVG from './SvgIcons/star_border.svg';
import styles from './header.css';

 class Header extends Component {

  logout = e => {
    e.preventDefault();
    this.props.logoutStart();
    // window.location.href = '/Signin';
    this.props.clearCurrentProfile();
  }

  render() {
    const {
      auth,
      user,
    } = this.props;
    
    
    return(
      <div
        className={styles.header}
      >
        { auth ? <UserAuth user={user} handleLogout={this.logout} /> : <UserNotAuth /> }
      </div>
    );
  }
}

const UserNotAuth = () => (
  <Fragment>
    <div className={styles.left}>{'Welcome to Presents, please sign in'}</div>
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

const UserAuth = ({
  user,
  handleLogout
}) => (
  <Fragment>
    <div className={styles.left}>
      <div>Welcome to Presents, dear {user.name}</div>
    </div>
    <div className={styles.right}>
      <div>
        <Link to='/profiles'>
          {/* <SVGIcon
            icon={usersSVG}
            className={styles.icon}
          /> */}
          <span className={styles.userText}>
            Users
          </span>
        </Link>
      </div>
      <div>
        <Link to='/dashboard'>
          <span>Dashboard</span>
        </Link>
      </div>
      <div
        className={styles.logout}
      >
        <img
          src={user.avatar}
          alt={user.name}
          title="You should have gravatar associated with your email address"
        />
        <button
          onClick={handleLogout}
        >
          <span>Logout</span>
        </button>
      </div>
    </div>
  </Fragment>
);

const mapStateToProps = state => ({
  auth: state.signin.isAuthenticated,
  user: state.signin.user,
});
export default connect(mapStateToProps, { logoutStart, clearCurrentProfile })(Header);
