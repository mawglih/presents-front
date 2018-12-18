export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
// export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const GET_PROFILES_START = 'GET_PROFILES_START';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
// export const GET_PROFILES_FAILURE = 'GET_PROFILES_FAILURE';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND';
export const CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROPFILE';
export const CREATE_PROFILE_START = 'CREATE_PROFILE_START';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
// export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';
export const ADD_OCCASION_START = 'ADD_OCCASION_START';
export const ADD_OCCASION_SUCCESS = 'ADD_OCCASION_SUCCESS';
// export const ADD_OCCASION_FAILURE = 'ADD_OCCASION_FAILURE';
export const GET_OCCASION_START = 'GET_OCCASION_START';
export const GET_OCCASION_SUCCESS = 'GET_OCCASION_SUCCESS';
// export const GET_OCCASION_FAILURE = 'GET_OCCASION_FAILURE';
export const GET_OCCASION_BY_ID_START = 'GET_OCCASION_BY_ID_START';
export const GET_OCCASION_BY_ID_SUCCESS = 'GET_OCCASION_BY_ID_SUCCESS';
// export const GET_OCCASION_BY_ID_FAILURE = 'GET_OCCASION_BY_ID_FAILURE';
export const DELETE_OCCASION_START = 'DELETE_OCCASION_START';
export const DELETE_OCCASION_SUCCESS = 'DELETE_OCCASION_SUCCESS';
// export const DELETE_OCCASION_FAILURE = 'DELETE_OCCASION_FAILURE';
export const EDIT_OCCASION_START = 'EDIT_OCCASION_START';
export const EDIT_OCCASION_SUCCESS = 'EDIT_OCCASION_SUCCESS';
// export const EDIT_OCCASION_FAILURE = 'DELETE_OCCASION_FAILURE';

export const getProfileStart = () => {
  return {
    type: GET_PROFILE_START,
  };
};

export const getProfileSuccess = ({ payload }) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload,
  };
};

export const getProfilesStart = () => {
  return {
    type: GET_PROFILES_START,
  };
};

export const getProfilesSuccess = ({ payload }) => {
  return {
    type: GET_PROFILES_SUCCESS,
    payload,
  };
};

// export const getProfileFailure = ({ error }) => {
//   return {
//     type: GET_PROFILE_FAILURE,
//     payload: error,
//   };
// };

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};

export const createProfileStart = (payload ) => {
  console.log('profile started')
  return {
    type: CREATE_PROFILE_START,
    payload,
  };
};

export const createProfileSuccess = ({ payload }) => {
  console.log('profile success')
  return {
    type: CREATE_PROFILE_SUCCESS,
    payload,
  };
};

// export const createProfileFailure = ({ error }) => {
//   return {
//     type: CREATE_PROFILE_FAILURE,
//     payload: error,
//   };
// };

export const addOccasionStart = (payload ) => {
  console.log('add occasion action started')
  return {
    type: ADD_OCCASION_START,
    payload,
  };
};

export const addOccasionSuccess = ({ payload }) => {
  console.log('add occasion action success')
  return {
    type: ADD_OCCASION_SUCCESS,
    payload,
  };
};

// export const addOccasionFailure = ({ error }) => {
//   return {
//     type: ADD_OCCASION_FAILURE,
//     payload: error,
//   };
// };

export const getOccasionStart = () => {
  console.log('occasion started')
  return {
    type: GET_OCCASION_START,
  };
};

export const getOccasionSuccess = ({ payload }) => {
  console.log('occasion success')
  return {
    type: GET_OCCASION_SUCCESS,
    payload,
  };
};

// export const getOccasionFailure = ({ error }) => {
//   return {
//     type: GET_OCCASION_FAILURE,
//     payload: error,
//   };
// };

export const getOccasionByIdStart = (payload) => {
  console.log('occasion by id started: ', payload)
  return {
    type: GET_OCCASION_BY_ID_START,
    payload,
  };
};

export const getOccasionByIdSuccess = ({ payload }) => {
  console.log('occasion by id success')
  return {
    type: GET_OCCASION_BY_ID_SUCCESS,
    payload,
  };
};

// export const getOccasionByIdFailure = ({ error }) => {
//   return {
//     type: GET_OCCASION_BY_ID_FAILURE,
//     payload: error,
//   };
// };

export const deleteOccasionStart = (payload ) => {
  console.log('delete occasion action started');
  return {
    type: DELETE_OCCASION_START,
    payload,
  };
};

export const deleteOccasionSuccess = ({ payload }) => {
  console.log('delete occasion action success: ', payload);
  return {
    type: DELETE_OCCASION_SUCCESS,
    payload,
  };
};

// export const deleteOccasionFailure = ({ error }) => {
//   console.log('delete occasion action failure: ', error);
//   return {
//     type: DELETE_OCCASION_FAILURE,
//     payload: error,
//   };
// };

export const editOccasionStart = (payload ) => {
  console.log('edit occasion action started');
  return {
    type: EDIT_OCCASION_START,
    payload,
  };
};

export const editOccasionSuccess = ({ payload }) => {
  console.log('edit occasion action success: ', payload);
  return {
    type: EDIT_OCCASION_SUCCESS,
    payload,
  };
};

// export const editOccasionFailure = ({ error }) => {
//   console.log('edit occasion action failure: ', error);
//   return {
//     type: EDIT_OCCASION_FAILURE,
//     payload: error,
//   };
// };
