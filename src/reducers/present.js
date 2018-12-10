import {
  ADD_PRESENT_SUCCESS,
} from 'actions/presents';
const INITIAL_STATE = {
  presents: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ADD_PRESENT_SUCCESS:
      return {
        ...state,
        presents: [payload, ...state.presents],
      };
    default:
      return state;
  }
};