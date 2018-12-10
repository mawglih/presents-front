import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Routes from 'routes';
import SignIn from 'containers/User/SignIn';
import { ConnectedRouter } from 'connected-react-router';
import Layout from 'components/Layout';
import {
  checkUserStart,
} from 'actions';


class App extends Component {
  componentDidMount() {
    const {
      checkUserStart,
    } = this.props;
    if(localStorage.getItem('jwtToken')) {
      const token = localStorage.getItem('jwtToken');
      checkUserStart(token);
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
        ) : <SignIn />
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

export default connect(mapStateToProps, { checkUserStart })(App);
