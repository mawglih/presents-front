import {
  all,
} from 'redux-saga/effects';
import signinSaga from './signin';
import signupSaga from './signup';

export default function* rootSaga() {
  yield all([
    ...signinSaga,
    ...signupSaga,
  ]);
}
