import {
  call,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILES_START,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_BY_HANDLE_START,
  GET_PROFILE_BY_HANDLE_SUCCESS,
  PROFILE_LOADING,
} from 'actions/profile';
import {
  GET_FAILURE,
} from 'actions';
 import axios from 'axios';
 import { API } from 'utils/constants';

 export function* getProfileStartSaga() {
   yield put({
     type: PROFILE_LOADING,
   });
   try {
     const {
       data,
       status,
     } = yield call(axios, {
       method: 'get',
       url: `${API}profile/`,
     });
     if (status >=200 && status < 300) {
      yield console.log('profile is in saga: ', data);
      yield put({
        type: GET_PROFILE_SUCCESS,
        payload: data,
      });
     } else if (status === 404) {
       yield put({
         type: GET_PROFILE_SUCCESS,
         payload: {},
       });
     } else {
       throw data;
     }
   } catch (err) {
     yield console.log('profile saga error: ', err);
     yield put({
       type: GET_PROFILE_SUCCESS,
       payload: {},
     });
   }
 }

 export function* getProfileByUseridStartSaga({payload: id}) {
  yield put({
    type: PROFILE_LOADING,
  });
  try {
    const {
      data,
      status,
    } = yield call(axios, {
      method: 'get',
      url: `${API}profile/user/${id}`,
    });
    if (status >=200 && status < 300) {
     yield console.log('profile is in saga: ', data);
     yield put({
       type: GET_PROFILE_BY_HANDLE_SUCCESS,
       payload: data,
     });
    } else if (status === 404) {
      yield put({
        type: GET_PROFILE_BY_HANDLE_SUCCESS,
        payload: {},
      });
    } else {
      throw data;
    }
  } catch (err) {
    yield console.log('profile saga error: ', err);
    yield put({
      type: GET_PROFILE_BY_HANDLE_SUCCESS,
      payload: {},
    });
  }
}

 export function* getProfilesStartSaga() {
  yield put({
    type: PROFILE_LOADING,
  });
  try {
    const {
      data,
      status,
    } = yield call(axios, {
      method: 'get',
      url: `${API}profile/all`,
    });
    if (status >=200 && status < 300) {
     yield console.log('profiles is in saga: ', data);
     yield put({
       type: GET_PROFILES_SUCCESS,
       payload: data,
     });
    } else {
      throw data;
    }
  } catch (err) {
    yield console.log('profiles saga error: ', err);
    yield put({
      type: GET_FAILURE,
      payload: err,
    });
  }
}

 export function* getProfileSaga() {
   yield takeLatest(GET_PROFILE_START, getProfileStartSaga);
   yield takeLatest(GET_PROFILE_BY_HANDLE_START, getProfileByUseridStartSaga);
   yield takeEvery(GET_PROFILES_START, getProfilesStartSaga);
 }

 export default [
   getProfileSaga(),
 ];
