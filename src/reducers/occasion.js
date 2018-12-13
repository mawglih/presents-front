import {
  ADD_OCCASION_SUCCESS,
} from 'actions/profile';

const INIIAL_STATE = {
  occasions: [],
  occasion: {},
}

export default (state = INIIAL_STATE, { type, payload }) => {
  switch(type) {
    case ADD_OCCASION_SUCCESS:
      return {
        ...state,
        occasion: payload,
        occasions: [payload, ...state.profile.occasions],
      };
    default:
      return state;
  }
};
