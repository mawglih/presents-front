export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';


export const signinStart = (payload) => {
  console.log('action signin paylod: ', payload);
  return{
    type:SIGNIN_START,
    payload,
  };
};

export const signinSuccess = ({ payload }) => {
  return{
    type:SIGNIN_SUCCESS,
    payload,
  };
};

export const signinFailure = ({ payload }) => {
  return{
    type:SIGNIN_FAILURE,
    error: payload,
  };
};