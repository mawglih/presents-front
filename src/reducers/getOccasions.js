import {
  GET_OCCASION_SUCCESS
} from 'actions/profile';

const INITIAL_STATE = {
  loading: true,
  occasions: [],
}

const GetOccasionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_OCCASION_SUCCESS:
      return {
        ...state,
        occasions: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default GetOccasionReducer;
