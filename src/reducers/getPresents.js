import {
  GET_PRESENTS_SUCCESS,
  GET_PRESENT_BY_ID_SUCCESS,
  GET_PRESENTS_BY_USERID_SUCCESS,
  ADD_PRESENT_SUCCESS,
} from 'actions/presents';

const INITIAL_STATE = {
  presents: [],
  presentsByUser: [],
  present: {},
  loading: true,
}

const GetPresentsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_PRESENTS_SUCCESS:
      return {
        ...state,
        presents: [...payload],
        loading: false,
      };
    case GET_PRESENTS_BY_USERID_SUCCESS:
      return {
        ...state,
        presentsByUser: [...payload],
        loading: false,
      };
    case GET_PRESENT_BY_ID_SUCCESS:
      return {
        ...state,
        present: payload,
        loading: false,
      };
    case ADD_PRESENT_SUCCESS:
      return {
        ...state,
        presents: [...payload, ...state.presents],
      };
    default:
      return state;
  }
}

export default GetPresentsReducer;
