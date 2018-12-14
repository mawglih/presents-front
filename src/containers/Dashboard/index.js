import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PodarkiList from 'containers/PodarkiList';
import Profile from 'containers/Profile';
import styles from './dashboard.css';

class Dashboard extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      history,
    } = this.props;
    if (!nextProps.auth) {
      history.push('/signin');
    }
  }
  render() {
    const {
      user,
    } = this.props;
    return(
      <div className={styles.dashbord}>
        <div className={styles.userinfo}>
          <h1>Welcome to Dashboard {user.name}</h1>
          <div>
            <img
              src={user.avatar}
              alt={user.name}
            />
          </div>
          <div className={styles.button}>
            <h2> Add presents</h2>
            <button>
              <Link to='/addpresent'>
                <span>Add</span>
              </Link>
            </button>
          </div>
          <div className={styles.profile}> 
            <Profile />
          </div>
        </div>
        <div className={styles.podarki}>
          <PodarkiList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.signin.user,
  auth: state.signin.isAuthenticated,
});

export default connect(mapStateToProps, null)(Dashboard);
