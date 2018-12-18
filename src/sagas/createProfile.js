import {
  call,
  apply,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_FAILURE,
} from 'actions';
import {
  CREATE_PROFILE_START,
  CREATE_PROFILE_SUCCESS,
} from 'actions/profile';
import { API } from 'utils/constants';

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
      url: `${API}profile/`,
    });
    if (status >= 200 && status < 300) {
      yield put({
        type: CREATE_PROFILE_SUCCESS,
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

export function* createProfileSaga() {
  yield takeEvery(CREATE_PROFILE_START, createProfileStartSaga);
}

export default createProfileSaga();
