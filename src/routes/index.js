import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import SignIn from 'containers/User/SignIn';
import SignUp from 'containers/User/SignUp';
import Profile from 'containers/Profile';
import Profiles from 'containers/Profiles';
import Dashboard from 'containers/Dashboard';
import AddPresent from 'containers/AddPresent';
import PrivateRoute from 'common/PrivateRoute';
import CreateProfile from 'containers/Profile/createProfile';
import EditProfile from 'containers/Profile/editProfile';
import AddOccasions from 'containers/Profile/addOccasions';
import Occasions from 'containers/Occasions';
import EditOccasion from 'containers/Occasions/editOccasion';
import EditPresent from 'containers/AddPresent/editPresent';
import ProfileDetail from 'containers/Profiles/profileDetails';
import {
  SIGN_UP as SIGN_UP_URL,
  SIGN_IN as SIGN_IN_URL,
  PROFILE as PROFILE_URL,
  PROFILES as PROFILES_URL,
  HOME as HOME_URL,
  DASHBOARD as DASHBOARD_URL,
  ADDPRESENT as ADDPRESENT_URL,
  CREATEPROFILE as CREATEPROFILE_URL,
  EDITPROFILE as EDITPROFILE_URL,
  ADDOCCASIONS as ADDOCCASIONS_URL,
  OCCASIONS as OCCASIONS_URL,
  OCCASION_BY_ID as OCCASION_BY_ID_URL,
  PRESENT_BY_ID as PRESENT_BY_ID_URL,
  PROFILE_BY_HANDLE as PROFILE_BY_HANDLE_URL,
} from './constants';


export const Routes = () => (
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
      exact
      path={PROFILE_BY_HANDLE_URL}
      component={ProfileDetail}
    />
    <Route
      exact
      path={PROFILES_URL}
      component={Profiles}
    />
    <Route
      path={SIGN_UP_URL}
      component={SignUp}
    />
    <PrivateRoute
      exact
      path={DASHBOARD_URL}
      component={Dashboard}
    />
    <PrivateRoute
      exact
      path={CREATEPROFILE_URL}
      component={CreateProfile}
    />
    <PrivateRoute
      exact
      path={EDITPROFILE_URL}
      component={EditProfile}
    />
    <PrivateRoute
      exact
      path={OCCASION_BY_ID_URL}
      component={EditOccasion}
    />
    <PrivateRoute
      exact
      path={PRESENT_BY_ID_URL}
      component={EditPresent}
    />
    <PrivateRoute
      exact
      path={ADDOCCASIONS_URL}
      component={AddOccasions}
    />
    <PrivateRoute
      exact
      path={OCCASIONS_URL}
      component={Occasions}
    />
    <Route
      exact
      path={ADDPRESENT_URL}
      component={AddPresent}
    />
  </Switch>
);

export const RoutesNotAuth = () => (
  <Switch>
    <Route
      path={SIGN_IN_URL}
      component={SignIn}
    />
    <Route
      exact
      path={HOME_URL}
      component={Home}
    />
    <Route
      path={SIGN_UP_URL}
      component={SignUp}
    />
  </Switch>
)

export default {};
