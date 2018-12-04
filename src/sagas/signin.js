import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGNIN_SUCCESS,
} from 'actions';

const URL = 'http://localhost:5000/signin';

export function* signinStartSaga() {
  const response = yield call(axios, put, URL);
  yield put({
    type: SIGNIN_SUCCESS,
    payload: response.data,
  });
}

export default function* signinSaga() {
  yield takeEvery(signinStartSaga);
}