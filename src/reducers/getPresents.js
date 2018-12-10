import {
  GET_PRESENTS_SUCCESS
} from 'actions/presents';

const INITIAL_STATE = {}

const GetPresentsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_PRESENTS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export default GetPresentsReducer;
