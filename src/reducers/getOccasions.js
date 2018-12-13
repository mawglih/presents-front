import {
  GET_OCCASION_SUCCESS
} from 'actions/profile';

const INITIAL_STATE = {}

const GetOccasionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_OCCASION_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export default GetOccasionReducer;
