export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILES_START = 'GET_PROFILES_START';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND';
export const CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROPFILE';
export const CREATE_PROFILE_START = 'CREATE_PROFILE_START';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const ADD_OCCASION_START = 'ADD_OCCASION_START';
export const ADD_OCCASION_SUCCESS = 'ADD_OCCASION_SUCCESS';
export const GET_OCCASION_START = 'GET_OCCASION_START';
export const GET_OCCASION_SUCCESS = 'GET_OCCASION_SUCCESS';
export const GET_OCCASION_BY_ID_START = 'GET_OCCASION_BY_ID_START';
export const GET_OCCASION_BY_ID_SUCCESS = 'GET_OCCASION_BY_ID_SUCCESS';
export const DELETE_OCCASION_START = 'DELETE_OCCASION_START';
export const DELETE_OCCASION_SUCCESS = 'DELETE_OCCASION_SUCCESS';
export const EDIT_OCCASION_START = 'EDIT_OCCASION_START';
export const EDIT_OCCASION_SUCCESS = 'EDIT_OCCASION_SUCCESS';
export const GET_PROFILE_BY_HANDLE_START = 'GET_PROFILE_BY_HANDLE_START';
export const GET_PROFILE_BY_HANDLE_SUCCESS = 'GET_PROFILE_BY_HANDLE_SUCCESS';

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

export const getProfileByHandleStart = (payload) => {
  console.log('action prof handle: ', payload);
  return {
    type: GET_PROFILE_BY_HANDLE_START,
    payload,
  };
};

export const getProfileByHandleSuccess = ({ payload }) => {
  console.log('action prof success handle: ', payload);
  return {
    type: GET_PROFILE_BY_HANDLE_SUCCESS,
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
  return {
    type: CREATE_PROFILE_START,
    payload,
  };
};

export const createProfileSuccess = ({ payload }) => {
  return {
    type: CREATE_PROFILE_SUCCESS,
    payload,
  };
};

export const addOccasionStart = (payload ) => {
  return {
    type: ADD_OCCASION_START,
    payload,
  };
};

export const addOccasionSuccess = ({ payload }) => {
  return {
    type: ADD_OCCASION_SUCCESS,
    payload,
  };
};

export const getOccasionStart = () => {
  return {
    type: GET_OCCASION_START,
  };
};

export const getOccasionSuccess = ({ payload }) => {
  return {
    type: GET_OCCASION_SUCCESS,
    payload,
  };
};

export const getOccasionByIdStart = (payload) => {
  return {
    type: GET_OCCASION_BY_ID_START,
    payload,
  };
};

export const getOccasionByIdSuccess = ({ payload }) => {
  return {
    type: GET_OCCASION_BY_ID_SUCCESS,
    payload,
  };
};

export const deleteOccasionStart = (payload ) => {
  return {
    type: DELETE_OCCASION_START,
    payload,
  };
};

export const deleteOccasionSuccess = ({ payload }) => {
  return {
    type: DELETE_OCCASION_SUCCESS,
    payload,
  };
};

export const editOccasionStart = (payload ) => {
  return {
    type: EDIT_OCCASION_START,
    payload,
  };
};

export const editOccasionSuccess = ({ payload }) => {
  return {
    type: EDIT_OCCASION_SUCCESS,
    payload,
  };
};
