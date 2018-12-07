import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGNUP_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from 'actions';

const URL = 'http://localhost:5000/api/users/register';

export function* signupStartSaga({ payload }) {
  const {
    name,
    email,
    password,
    password2,
  } = payload;
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        name,
        email,
        password,
        password2,
      },
      method: 'post',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      console.log('data in axios response signup: ', data);
      yield put({
        type: SIGNUP_SUCCESS,
        payload: data,
      });
      yield console.log('signup saga: ', data)
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('signup saga error: ', error);
    yield put({
      type: SIGNUP_FAILURE,
      payload: error,
    });
  }
}

export function* signupSaga() {
  yield takeEvery(SIGNUP_START, signupStartSaga);
}

export default signupSaga();