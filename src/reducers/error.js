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
        ...payload.response.data,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        ...payload.response.data,
      };
    default:
      return state;
  }
};
