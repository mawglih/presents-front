import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_FAILURE,
} from 'actions';
import {
  ADD_OCCASION_START,
  ADD_OCCASION_SUCCESS,
  EDIT_OCCASION_START,
  EDIT_OCCASION_SUCCESS,
} from 'actions/profile';
import { API } from 'utils/constants';

export function* addOccasionStartSaga({ payload }) {
  const {
    title,
    at,
    description,
    special,
  } = payload;
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        title,
        at,
        description,
        special,
      },
      method: 'post',
      url: `${API}profile/occasions/`,
    });
    if (status >= 200 && status < 300) {
      yield put({
        type: ADD_OCCASION_SUCCESS,
        payload: data,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield put({
      type: GET_FAILURE,
      payload: error,
    });
  }
}

export function* editOccasionStartSaga({ payload }) {
  const {
    id,
    title,
    at,
    description,
    special,
  } = payload;
  try {
    // const token = yield apply(localStorage, localStorage.getItem,['jwtToken']);
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        title,
      at,
      description,
      special,
      },
      method: 'put',
      url: `${API}profile/occasions/${id}`,
    });
    if (status >= 200 && status < 300) {
      yield put({
        type: EDIT_OCCASION_SUCCESS,
        payload: data,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield put({
      type: GET_FAILURE,
      payload: error,
    });
  }
}

export function* addOccasionSaga() {
  yield takeEvery(ADD_OCCASION_START, addOccasionStartSaga);
  yield takeEvery(EDIT_OCCASION_START, editOccasionStartSaga);
}

export default addOccasionSaga();