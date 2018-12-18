export const ADD_PRESENT_START = 'ADD_PRESENT_START';
export const ADD_PRESENT_SUCCESS = 'ADD_PRESENT_SUCCESS';
// export const ADD_PRESENT_FAILURE = 'ADD_PRESENT_FAILURE';
export const GET_PRESENTS_START = 'GET_PRESENTS_START';
export const GET_PRESENTS_SUCCESS = 'GET_PRESENTS_SUCCESS';
// export const GET_PRESENTS_FAILURE = 'GET_PRESENTS_FAILURE';
export const GET_PRESENT_BY_ID_START = 'GET_PRESENT_BY_ID_START';
export const GET_PRESENT_BY_ID_SUCCESS = 'GET_PRESENT_BY_ID_SUCCESS';
// export const GET_PRESENT_BY_ID_FAILURE = 'GET_PRESENT_BY_ID_FAILURE';
export const EDIT_PRESENT_START = 'EDIT_PRESENT_START';
export const EDIT_PRESENT_SUCCESS = 'EDIT_PRESENT_SUCCESS';
// export const EDIT_PRESENT_FAILURE = 'EDIT_PRESENT_FAILURE';
export const GET_PRESENTS_BY_USERID_START = 'GET_PRESENTS_BY_USERID_START';
export const GET_PRESENTS_BY_USERID_SUCCESS = 'GET_PRESENTS_BY_USERID_SUCCESS';
// export const GET_PRESENTS_BY_USERID_FAILURE = 'GET_PRESENTS_BY_USERID_FAILURE';


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

// export const addPresentFailure = ({ payload }) => {
//   return {
//     type: ADD_PRESENT_FAILURE,
//     error: payload,
//   };
// };

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

// export const getPresentsFailure = ({ payload }) => {
//   return {
//   type: GET_PRESENTS_FAILURE,
//   error: payload,
//   };
// };

export const getPresentByIdStart = ( payload ) => {
  console.log('get present by id action: ', payload);
  return {
    type: GET_PRESENT_BY_ID_START,
    payload,
  };
};

export const getPresentByIdSuccess = ( payload ) => {
  console.log('get presents by id success action: ', payload);
  return {
    type: GET_PRESENT_BY_ID_SUCCESS,
    payload,
  };
};

// export const getPresentByIdFailure = ({ payload }) => {
//   return {
//   type: GET_PRESENT_BY_ID_FAILURE,
//   error: payload,
//   };
// };

export const editPresentStart = (payload) => {
  console.log('editpresent action payload: ', payload);
  return {
    type: EDIT_PRESENT_START,
    payload,
  };
};

export const editPresentSuccess = ({ payload }) => {
  return {
    type: EDIT_PRESENT_SUCCESS,
    payload,
  };
};

// export const editPresentFailure = ({ payload }) => {
//   return {
//     type: EDIT_PRESENT_FAILURE,
//     error: payload,
//   };
// };

export const getPresentsByUserStart = ( payload ) => {
  console.log('get present by user by id action: ', payload);
  return {
    type: GET_PRESENTS_BY_USERID_START,
    payload,
  };
};

export const getPresentsByUserSuccess = ( payload ) => {
  console.log('get presents by user id success action: ', payload);
  return {
    type: GET_PRESENTS_BY_USERID_SUCCESS,
    payload,
  };
};

// export const getPresentsByUserFailure = ({ payload }) => {
//   return {
//   type: GET_PRESENTS_BY_USERID_FAILURE,
//   error: payload,
//   };
// };