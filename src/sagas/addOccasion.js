import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_OCCASION_FAILURE,
  ADD_OCCASION_START,
  ADD_OCCASION_SUCCESS,
} from 'actions/profile';


const URL = 'http://localhost:5000/api/profile/occasions/';

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
      url: URL,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response occasion add: ', data);
      yield put({
        type: ADD_OCCASION_SUCCESS,
        payload: data,
      });
      yield console.log('occasion saga: ', data)
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('occasion saga error: ', error);
    yield put({
      type: ADD_OCCASION_FAILURE,
      payload: error,
    });
  }
}

export function* addOccasionSaga() {
  yield takeEvery(ADD_OCCASION_START, addOccasionStartSaga);
}

export default addOccasionSaga();