import {
  call,
  apply,
  put,
  // takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import {
  // signinStart,
  // signinSuccess,
  SIGNIN_FAILURE,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  // setCurrentUserStart,
  // SET_CURRENT_USER_SUCCESS,
  // SET_CURRENT_USER_FAILURE,
  // SET_CURRENT_USER_START,
} from 'actions';

const URL = 'http://localhost:5000/api/users/login';

export function* signinStartSaga({ payload }) {
  const {
    email,
    password,
  } = payload;
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        email,
        password,
      },
      method: 'post',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      console.log('status in signin: ', status);
      console.log('data in signin: ', data);
      const { token } = yield data;
      console.log('token in signin: ', token);
      yield apply(localStorage, localStorage.setItem,['jwtToken', token]);
      yield call(setAuthToken, token);
      const decoded = yield call(jwt_decode, token);
      yield put({
        type: SIGNIN_SUCCESS,
        payload: decoded,
      });
      // yield put(setCurrentUserStart(token));
      
    } else {
      throw data;
    }
  } catch (error) {
    yield put({
      type: SIGNIN_FAILURE,
      payload: error,
    });
  }
}

// export function* setCurrentUserSaga(payload) {
//   try {
//     console.log('token in setCurrentsaga: ', payload);
//     yield call(setAuthToken, payload);
//     const decoded = yield call(jwt_decode, payload);
//     yield put({
//       type: SET_CURRENT_USER_SUCCESS,
//       payload: decoded,
//     });
//   } catch(err) {
//     yield put({
//       type: SET_CURRENT_USER_FAILURE,
//       payload: err,
//     });
//   }
    
// }

export function* signinSaga() {
  yield takeLatest(SIGNIN_START, signinStartSaga);
}

// export function* setUserSaga() {
//   yield takeLatest(SET_CURRENT_USER_START, setCurrentUserSaga);
// }

export default [
  signinSaga(),
];
