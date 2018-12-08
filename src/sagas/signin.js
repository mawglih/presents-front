import {
  call,
  apply,
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import {
  setCurrentUser,
  SIGNIN_FAILURE,
  SIGNIN_START,
  SIGNIN_SUCCESS,
} from 'actions';

const URL = 'http://localhost:5000/api/users/login';

export function* signinStartSaga({ payload }) {
  const {
    email,
    password,
  } = payload;
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        email,
        password,
      },
      method: 'post',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      const { token } = yield data;
      yield apply(localStorage, localStorage.setItem,['jwtToken', token]);
      yield call(setAuthToken, token);
      yield put(setCurrentUser(token));
      yield put({
        type: SIGNIN_SUCCESS,
        payload: token,
      });
    } else {
        throw data;
    }
  } catch (err) {
    yield put({
      type: SIGNIN_FAILURE,
      payload: err,
    });
  }
}

export function* signinSaga() {
  yield takeLatest(SIGNIN_START, signinStartSaga);
}


export default [
  signinSaga(),
];
