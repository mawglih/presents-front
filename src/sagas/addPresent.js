import {
  call,
  // apply,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_FAILURE,
} from 'actions';
import {
  ADD_PRESENT_START,
  ADD_PRESENT_SUCCESS,
  EDIT_PRESENT_START,
  EDIT_PRESENT_SUCCESS,
} from 'actions/presents';
import { API } from 'utils/constants';

export function* addPresentStartSaga({ payload }) {
  const {
    title,
    url,
    price,
    image,
    description,
    occasion,
  } = payload;
  try {
    // const token = yield apply(localStorage, localStorage.getItem,['jwtToken']);
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        title,
        url,
        price,
        image,
        description,
        occasion,
      },
      method: 'post',
      url: `${API}podarki/`,
    });
    if (status >= 200 && status < 300) {
      yield put({
        type: ADD_PRESENT_SUCCESS,
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

export function* editPresentStartSaga({ payload }) {
  const {
    id,
    title,
    url,
    price,
    image,
    description,
    occasion,
  } = payload;
  try {
    // const token = yield apply(localStorage, localStorage.getItem,['jwtToken']);
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        title,
        url,
        price,
        image,
        description,
        occasion,
      },
      method: 'put',
      url: `${API}podarki/${id}`,
    });
    if (status >= 200 && status < 300) {
      yield put({
        type: EDIT_PRESENT_SUCCESS,
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

export function* addPresentSaga() {
  yield takeEvery(ADD_PRESENT_START, addPresentStartSaga);
  yield takeEvery(EDIT_PRESENT_START, editPresentStartSaga);
}

export default addPresentSaga();