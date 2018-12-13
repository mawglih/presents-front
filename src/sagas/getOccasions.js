import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_OCCASION_FAILURE,
  GET_OCCASION_START,
  GET_OCCASION_SUCCESS,
} from 'actions/profile';


const URL = 'http://localhost:5000/api/profile/';

export function* getOccasionStartSaga() {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response profile get: ', data.occasions);
      yield put({
        type: GET_OCCASION_SUCCESS,
        payload: data.occasions,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('occasion saga error: ', error);
    yield put({
      type: GET_OCCASION_FAILURE,
      payload: error,
    });
  }
}

export function* getOccasionSaga() {
  yield takeEvery(GET_OCCASION_START, getOccasionStartSaga);
}

export default [
  getOccasionSaga()
];