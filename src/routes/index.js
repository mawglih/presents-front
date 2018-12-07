import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import SignIn from 'containers/User/SignIn';
import SignUp from 'containers/User/SignUp';
import Logout from 'containers/User/Logout';
import Profile from 'containers/Profle';
import Dashboard from 'containers/Dashboard';
import AddPresents from 'containers/AddPresents';
import {
  LOGOUT as LOGOUT_URL,
  SIGN_UP as SIGN_UP_URL,
  SIGN_IN as SIGN_IN_URL,
  PROFILE as PROFILE_URL,
  HOME as HOME_URL,
  DASHBOARD as DASHBOARD_URL,
  ADDPRESENTS as ADDPRESENTS_URL,
} from './constants';


export default () => (
  <Switch>
    <Route
      exact
      path={HOME_URL}
      component={Home}
    />
    <Route
      exact
      path={SIGN_IN_URL}
      component={SignIn}
    />
    <Route
      exact
      path={PROFILE_URL}
      component={Profile}
    />
    <Route
      path={SIGN_UP_URL}
      component={SignUp}
    />
    <Route
      exact
      path={LOGOUT_URL}
      component={Logout}
    />
    <Route
      exact
      path={DASHBOARD_URL}
      component={Dashboard}
    />
    <Route
      exact
      path={ADDPRESENTS_URL}
      component={AddPresents}
    />
  </Switch>
);
