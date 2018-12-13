import {
  all,
} from 'redux-saga/effects';
import signinSaga from './signin';
import signupSaga from './signup';
import logoutSaga from './logout';
import checkUserSaga from './checkCurrentUser';
import addPresentSaga from './addPresent';
import getPresentsSaga from './getPresents';
import getProfileSaga from './getProfile';
import createProfileSaga from './createProfile';
import addOccasionSaga from './addOccasion';

export default function* rootSaga() {
  yield all([
    ...signinSaga,
    ...signupSaga,
    ...logoutSaga,
    ...checkUserSaga,
    ...addPresentSaga,
    ...getPresentsSaga,
    ...getProfileSaga,
    ...createProfileSaga,
    ...addOccasionSaga,
  ]);
}
