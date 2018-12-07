import {
  call,
  apply,
  put,
  takeEvery,
} from 'redux-saga/effects';
import setAuthToken from 'utils/setAuthToken';
import {
  LOGOUT_START,
  LOGOUT_SUCCESS
} from 'actions';

export function* logoutStartSaga() {
  yield apply(localStorage, localStorage.removeItem,['jwtToken']);
  yield call(setAuthToken, false);
  yield put({
    type: LOGOUT_SUCCESS,
  });
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT_START, logoutStartSaga);
}

export default [
  logoutSaga(),
];
