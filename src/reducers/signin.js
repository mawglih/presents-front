import {
  SET_CURRENT_USER,
  LOGOUT_SUCCESS,
} from 'actions';
import isEmpty from 'utils/isEmpty';
const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: payload,
      }
    default:
      return state;
  }
};
