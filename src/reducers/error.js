import {
  SIGNIN_FAILURE,
  SIGNUP_FAILURE,
} from 'actions';
import {
  ADD_PRESENT_FAILURE,
} from 'actions/presents';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case ADD_PRESENT_FAILURE:
      return {
        ...state,
        ...payload.response.data,
      };
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
