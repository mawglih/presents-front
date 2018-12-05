import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  // signinStart,
  // signinSuccess,
  signinFailure,
  SIGNIN_START,
  SIGNIN_SUCCESS,
} from 'actions';

const URL = 'http://localhost:5000/api/users/login';

export function* signinStartSaga(payload) {
  try {
    const response = yield call(axios.post(URL, { payload }));
    yield put({
      type: SIGNIN_SUCCESS,
      payload: response.data,
    });
    yield console.log('signin saga: ', response.data)
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* signinSaga() {
  yield takeEvery(SIGNIN_START, signinStartSaga);
}

export default signinSaga();