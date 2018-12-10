import {
  GET_PROFILE_SUCCESS,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
} from 'actions/profile';

const INITIAL_STATE = {
  current: null,
  profiles: null,
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
      }
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        current: null,
      }
    default:
      return state;
  }
}
