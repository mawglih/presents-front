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
export const ADD_OCCASION_START = 'ADD_OCCASION_START';
export const ADD_OCCASION_SUCCESS = 'ADD_OCCASION_SUCCESS';
export const ADD_OCCASION_FAILURE = 'ADD_OCCASION_FAILURE';
export const GET_OCCASION_START = 'GET_OCCASION_START';
export const GET_OCCASION_SUCCESS = 'GET_OCCASION_SUCCESS';
export const GET_OCCASION_FAILURE = 'GET_OCCASION_FAILURE';
export const GET_OCCASION_BY_ID_START = 'GET_OCCASION_BY_ID_START';
export const GET_OCCASION_BY_ID_SUCCESS = 'GET_OCCASION_BY_ID_SUCCESS';
export const GET_OCCASION_BY_ID_FAILURE = 'GET_OCCASION_BY_ID_FAILURE';


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

export const addOccasionFailure = ({ error }) => {
  return {
    type: ADD_OCCASION_FAILURE,
    payload: error,
  };
};

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

export const getOccasionFailure = ({ error }) => {
  return {
    type: GET_OCCASION_FAILURE,
    payload: error,
  };
};

export const getOccasionByIdStart = (payload) => {
  console.log('occasion by id started: ', payload)
  return {
    type: GET_OCCASION_BY_ID_START,
    payload,
  };
};

export const get_BY_IDByIdSuccess = ({ payload }) => {
  console.log('occasion by id success')
  return {
    type: GET_OCCASION_BY_ID_SUCCESS,
    payload,
  };
};

export const getOccasionByIdFailure = ({ error }) => {
  return {
    type: GET_OCCASION_BY_ID_FAILURE,
    payload: error,
  };
};