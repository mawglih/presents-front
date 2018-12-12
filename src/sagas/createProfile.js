import {
  call,
  apply,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_PROFILE_FAILURE,
  CREATE_PROFILE_START,
  CREATE_PROFILE_SUCCESS,
} from 'actions/profile';


const URL = 'http://localhost:5000/api/profile/';

export function* createProfileStartSaga({ payload }) {
  const {
    handle,
    company,
    website,
    location,
    statusP,
    skills,
    bio,
    githubusername,
    facebook,
    youtube,
    twitter,
    linkedin,
    instagram,
  } = payload;
  try {
    const token = yield apply(localStorage, localStorage.getItem,['jwtToken']);
    yield console.log('profile token is: ', token);
    yield console.log('profile saga axios defaults: ', axios.defaults.headers.common);
    const {
      data,
      status,
    } = yield call(axios,{
      data: {
        handle,
        company,
        website,
        location,
        statusP,
        skills,
        bio,
        githubusername,
        facebook,
        youtube,
        twitter,
        linkedin,
        instagram,
      },
      method: 'post',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response profile add: ', data);
      yield put({
        type: CREATE_PROFILE_SUCCESS,
        payload: data,
      });
      yield console.log('PROFILE saga: ', data)
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('PROFILE saga error: ', error);
    yield put({
      type: CREATE_PROFILE_FAILURE,
      payload: error,
    });
  }
}

export function* createProfileSaga() {
  yield takeEvery(CREATE_PROFILE_START, createProfileStartSaga);
}

export default createProfileSaga();
