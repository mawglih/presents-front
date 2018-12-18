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
  DELETE_OCCASION_START,
  DELETE_OCCASION_SUCCESS,
  getOccasionStart,
} from 'actions/profile';
import { API } from 'utils/constants';

export function* deleteOccasionStartSaga({ payload: id }) {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'delete',
      url: `${API}profile/occasions/`,
    });
    if (status >= 200 && status < 300) {
      yield put({
        type: DELETE_OCCASION_SUCCESS,
        payload: data,
      });
      yield put(getOccasionStart());
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

export function* deleteOccasionSaga() {
  yield takeEvery(DELETE_OCCASION_START, deleteOccasionStartSaga);
}

export default deleteOccasionSaga();