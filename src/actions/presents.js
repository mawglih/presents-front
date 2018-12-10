export const ADD_PRESENT_START = 'ADD_PRESENT_START';
export const ADD_PRESENT_SUCCESS = 'ADD_PRESENT_SUCCESS';
export const ADD_PRESENT_FAILURE = 'ADD_PRESENT_FAILURE';
export const GET_PRESENTS_START = 'GET_PRESENTS_START';
export const GET_PRESENTS_SUCCESS = 'GET_PRESENTS_SUCCESS';
export const GET_PRESENTS_FAILURE = 'GET_PRESENTS_FAILURE';


export const addPresentStart = (payload) => {
  console.log('addpresent action payload: ', payload);
  return {
    type: ADD_PRESENT_START,
    payload,
  };
};

export const addPresentSuccess = ({ payload }) => {
  return {
    type: ADD_PRESENT_SUCCESS,
    payload,
  };
};

export const addPresentFailure = ({ payload }) => {
  return {
    type: ADD_PRESENT_FAILURE,
    error: payload,
  };
};

export const getPresentsStart = () => {
  return {
    type: GET_PRESENTS_START,
  };
};

export const getPresentsSuccess = ( payload ) => {
  console.log('get presents success action: ', payload);
  return {
    type: GET_PRESENTS_SUCCESS,
    payload,
  };
};

export const getPresentsFailure = ({ payload }) => {
  return {
  type: GET_PRESENTS_FAILURE,
  error: payload,
  };
};