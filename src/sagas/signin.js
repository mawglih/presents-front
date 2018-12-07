import {
  call,
  apply,
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import {
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
      console.log('status in signin: ', status);
      console.log('data in signin: ', data);
      const { token } = yield data;
      console.log('token in signin: ', token);
      yield apply(localStorage, localStorage.setItem,['jwtToken', token]);
      yield call(setAuthToken, token);
      const decoded = yield call(jwt_decode, token);
      yield put({
        type: SIGNIN_SUCCESS,
        payload: decoded,
      });
    } else {
        throw data;
    }
  } catch (err) {
    yield console.log('signin saga error2: ', err);
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
