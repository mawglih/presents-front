import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './dashboard.css';

const Dashboard = ({
  user,
}) => (
  <div className={styles.dashbord}>
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
        <Link to='/addpresents'>
          <span>Add</span>
        </Link>
      </button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.signin.user,
});

export default connect(mapStateToProps, null)(Dashboard);
