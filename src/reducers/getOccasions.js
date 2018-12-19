import {
  GET_OCCASION_SUCCESS,
  GET_OCCASION_BY_ID_SUCCESS,
  CLEAR_CURRENT_PROFILE,
} from 'actions/profile';

const INITIAL_STATE = {
  loading: true,
  occasions: [],
  occasion: {},
}

const GetOccasionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_OCCASION_SUCCESS:
      return {
        ...state,
        occasions: payload,
        loading: false,
      };
    case GET_OCCASION_BY_ID_SUCCESS:
      return {
        ...state,
        occasion: payload,
        loading: false,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        occasions: [],
        occasion: {},
        loading: true,
      };
    default:
      return state;
  }
}

export default GetOccasionReducer;
