import {
  call,
  // apply,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  setCurrentUser,
  logoutStart,
  GET_FAILURE,
  CHECK_USER_START,
} from 'actions';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import { clearCurrentProfile } from 'actions/profile';

export function* checkUserStartSaga(token) {
  try {
    yield call(setAuthToken, token);
    const decoded = yield call(jwt_decode, token);
    yield put(setCurrentUser(token));
    const currentTime = yield Date.now / 1000;
    if(decoded.exp < currentTime) {
      yield put(logoutStart);
      yield put(clearCurrentProfile);
    }
  } catch (err) {
    yield put({
      type: GET_FAILURE,
      payload: err,
    });
  }
}

export function* checkCurrentUserSaga() {
  yield takeLatest(CHECK_USER_START, checkUserStartSaga);
}

export default [
  checkCurrentUserSaga(),
];
