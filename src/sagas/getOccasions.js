import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_FAILURE,
} from 'actions';
import {
  GET_OCCASION_START,
  GET_OCCASION_SUCCESS,
  GET_OCCASION_BY_ID_START,
  GET_OCCASION_BY_ID_SUCCESS,
} from 'actions/profile';
import { API } from 'utils/constants';

export function* getOccasionStartSaga() {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: `${API}profile/`,
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
      type: GET_FAILURE,
      payload: error,
    });
  }
}

export function* getOccasionByIdStartSaga({ payload: id }) {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: `${API}profile/occasions/${id}`,
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
      type: GET_FAILURE,
      payload: error,
    });
  }
}

export function* getOccasionSaga() {
  yield takeEvery(GET_OCCASION_START, getOccasionStartSaga);
  yield takeLatest(GET_OCCASION_BY_ID_START, getOccasionByIdStartSaga);
}

export default [
  getOccasionSaga()
];