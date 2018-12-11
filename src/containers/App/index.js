import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Routes,
  RoutesNotAuth,
} from 'routes';
import { ConnectedRouter } from 'connected-react-router';
import Layout from 'components/Layout';
import {
  setCurrentUser,
  logoutStart,
} from 'actions';
import validateToken from 'utils/validateToken';
import setAuthToken from 'utils/setAuthToken';

class App extends Component {
  componentDidMount() {
    const {
      setCurrentUser,
      logoutStart,
    } = this.props;
    if(localStorage.getItem('jwtToken')) {
      const token = localStorage.getItem('jwtToken');
      if(validateToken(token)) {
        setCurrentUser(token);
        setAuthToken(token);
      } else {
        logoutStart();
      }
    } else {
      logoutStart();
    }
  }
  render () {
    const {
      history,
      auth,
    } = this.props;
    return (
      <Fragment>
      {auth ? (
        <ConnectedRouter history={history}>
          <Layout>
            <Routes />
          </Layout>
        </ConnectedRouter>
        ) : (
        <ConnectedRouter history={history}>
          <Layout>
            <RoutesNotAuth/>
          </Layout>
        </ConnectedRouter>
        )
      }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.signin.isAuthenticated,
  }
};

export default connect(mapStateToProps, { setCurrentUser, logoutStart })(App);
