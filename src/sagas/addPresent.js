import {
  call,
  apply,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_PRESENT_FAILURE,
  ADD_PRESENT_START,
  ADD_PRESENT_SUCCESS,
} from 'actions/presents';


const URL = 'http://localhost:5000/api/podarki/';

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
    const token = yield apply(localStorage, localStorage.getItem,['jwtToken']);
    yield console.log('additem token is: ', token);
    yield console.log('saga axios defaults: ', axios.defaults.headers.common);
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
      url: URL,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response present add: ', data);
      yield put({
        type: ADD_PRESENT_SUCCESS,
        payload: data,
      });
      yield console.log('present saga: ', data)
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('present saga error: ', error);
    yield put({
      type: ADD_PRESENT_FAILURE,
      payload: error,
    });
  }
}

export function* addPresentSaga() {
  yield takeEvery(ADD_PRESENT_START, addPresentStartSaga);
}

export default addPresentSaga();