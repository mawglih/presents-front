import {
  GET_OCCASION_SUCCESS,
  GET_OCCASION_BY_ID_SUCCESS,
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
    default:
      return state;
  }
}

export default GetOccasionReducer;
