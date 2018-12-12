export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const GET_PROFILES_START = 'GET_PROFILES_START';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAILURE = 'GET_PROFILES_FAILURE';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND';
export const CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROPFILE';
export const CREATE_PROFILE_START = 'CREATE_PROFILE_START';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';

export const getProfileStart = () => {
  console.log('profile started')
  return {
    type: GET_PROFILE_START,
  };
};

export const getProfileSuccess = ({ payload }) => {
  console.log('profile success')
  return {
    type: GET_PROFILE_SUCCESS,
    payload,
  };
};

export const getProfileFailure = ({ error }) => {
  return {
    type: GET_PROFILE_FAILURE,
    payload: error,
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

export const createProfileFailure = ({ error }) => {
  return {
    type: CREATE_PROFILE_FAILURE,
    payload: error,
  };
};