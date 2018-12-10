import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  // GET_PROFILE_FAILURE,
  PROFILE_LOADING,
  // PROFILE_NOT_FOUND,
} from 'actions/profile';
 import axios from 'axios';

 const URL = 'http://localhost:5000/api/profile/';

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
       url: URL,
     });
     if (status >=200 && status < 300) {
      yield console.log('profile is in saga: ', data);
      yield put({
        type: GET_PROFILE_SUCCESS,
        payload: data,
      });
     } if (status === 404) {
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

 export function* getProfileSaga() {
   yield takeLatest(GET_PROFILE_START, getProfileStartSaga);
 }

 export default [
   getProfileSaga(),
 ];
