import {
  all,
} from 'redux-saga/effects';
import signinSaga from './signin';
import signupSaga from './signup';
import logoutSaga from './logout';

export default function* rootSaga() {
  yield all([
    ...signinSaga,
    ...signupSaga,
    ...logoutSaga,
  ]);
}
