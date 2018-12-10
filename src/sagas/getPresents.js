import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_PRESENTS_FAILURE,
  GET_PRESENTS_START,
  GET_PRESENTS_SUCCESS,
} from 'actions/presents';


const URL = 'http://localhost:5000/api/podarki/';

export function* getPresentsStartSaga() {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response presents get: ', data);
      yield put({
        type: GET_PRESENTS_SUCCESS,
        payload: data,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('present saga error: ', error);
    yield put({
      type: GET_PRESENTS_FAILURE,
      payload: error,
    });
  }
}

export function* getPresentsSaga() {
  yield takeEvery(GET_PRESENTS_START, getPresentsStartSaga);
}

export default [
  getPresentsSaga()
];