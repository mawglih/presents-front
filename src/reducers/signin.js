import {
  SIGNIN_SUCCESS,
} from 'actions';
import isEmpty from 'utils/isEmpty';
const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload,
      };
    default:
      return state;
  }
};
