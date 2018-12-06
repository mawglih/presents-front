export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

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
