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
  GET_PRESENT_BY_ID_START,
  GET_PRESENT_BY_ID_SUCCESS,
  GET_PRESENT_BY_ID_FAILURE,
  GET_PRESENTS_BY_USERID_START,
  GET_PRESENTS_BY_USERID_SUCCESS,
  GET_PRESENTS_BY_USERID_FAILURE,
} from 'actions/presents';
import { API } from 'utils/constants';

const URL = `${API}podarki/`;

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

export function* getPresentByUseridStartSaga({ payload: id }) {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: `${API}podarki/user/${id}`,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response present by userid get: ', data);
      yield put({
        type: GET_PRESENTS_BY_USERID_SUCCESS,
        payload: data,
      });
    } else if (status === 403) {
      yield put({
        type: GET_PRESENTS_BY_USERID_SUCCESS,
        payload: [],
      });
    }
  } catch (error) {
    yield console.log('present by userid saga error: ', error);
    yield put({
      type: GET_PRESENTS_BY_USERID_FAILURE,
      payload: error,
    });
  }
}

export function* getPresentByIdStartSaga({ payload: id }) {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: `${API}podarki/${id}`,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response present by id get: ', data);
      yield put({
        type: GET_PRESENT_BY_ID_SUCCESS,
        payload: data,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('present saga error: ', error);
    yield put({
      type: GET_PRESENT_BY_ID_FAILURE,
      payload: error,
    });
  }
}

export function* getPresentsSaga() {
  yield takeEvery(GET_PRESENTS_START, getPresentsStartSaga);
  yield takeEvery(GET_PRESENT_BY_ID_START, getPresentByIdStartSaga);
  yield takeEvery(GET_PRESENTS_BY_USERID_START, getPresentByUseridStartSaga);
}

export default [
  getPresentsSaga()
];