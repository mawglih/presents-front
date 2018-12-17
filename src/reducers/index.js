import { combineReducers } from 'redux';
import signin from './signin';
import signup from './signup';
import error from './error';
import getPresents from './getPresents';
import profile from './profile';
import getOccasion from './getOccasions';

export default combineReducers({
  signin,
  signup,
  error,
  getPresents,
  profile,
  getOccasion,
});
