import jwt_decode from 'jwt-decode';
export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const signinStart = (payload) => {
  console.log('action signin paylod: ', payload);
  return{
    type: SIGNIN_START,
    payload,
  };
};

export const signinSuccess = ({ payload }) => {
  return{
    type: SIGNIN_SUCCESS,
    payload,
  };
};

export const signinFailure = ({ payload }) => {
  return{
    type: SIGNIN_FAILURE,
    error: payload,
  };
};

export const signupStart = (payload) => {
  console.log('action signup paylod: ', payload);
  return{
    type: SIGNUP_START,
    payload,
  };
};

export const signupSuccess = ({ payload }) => {
  return{
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signupFailure = ({ payload }) => {
  return{
    type: SIGNUP_FAILURE,
    error: payload,
  };
};

export const setCurrentUser = token => {
  const decoded = jwt_decode(token);
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutStart = () => {
  console.log('logout saga started');
  return {
    type: LOGOUT_START,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {},
  };
};
