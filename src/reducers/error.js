import {
  SIGNIN_FAILURE,
  SIGNUP_FAILURE
} from 'actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case SIGNIN_FAILURE:
      return {
        ...state,
        payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
