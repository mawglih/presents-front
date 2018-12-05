import {
  SIGNUP_SUCCESS,
} from 'actions';
const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
