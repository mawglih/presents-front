import {
  GET_PROFILE_SUCCESS,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_BY_HANDLE_SUCCESS,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
} from 'actions/profile';

const INITIAL_STATE = {
  current: null,
  profiles: [],
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case GET_PROFILE_BY_HANDLE_SUCCESS:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: [...payload, ...state.profiles],
        loading: false,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        current: null,
        profiles: [],
      };
    default:
      return state;
  }
}
