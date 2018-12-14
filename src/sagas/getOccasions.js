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
  GET_OCCASION_BY_ID_START,
  GET_OCCASION_BY_ID_SUCCESS,
  GET_OCCASION_BY_ID_FAILURE,
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
const URL2 = 'http://localhost:5000/api/profile/occasions/';

export function* getOccasionByIdStartSaga({ payload: id }) {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: URL2,
      params: {
        id,
      },
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response occasion by id get: ', data);
      yield put({
        type: GET_OCCASION_BY_ID_SUCCESS,
        payload: data,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('occasion saga error: ', error);
    yield put({
      type: GET_OCCASION_BY_ID_FAILURE,
      payload: error,
    });
  }
}

export function* getOccasionSaga() {
  yield takeEvery(GET_OCCASION_START, getOccasionStartSaga);
  yield takeEvery(GET_OCCASION_BY_ID_START, getOccasionByIdStartSaga);
}

export default [
  getOccasionSaga()
];