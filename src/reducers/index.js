import { combineReducers } from 'redux';
import signin from './signin';
import signup from './signup';
import error from './error';
import presents from './present';
import getPresents from './getPresents';
import profile from './profile';
import occasion from './occasion';
import getOccasion from './getOccasions';

export default combineReducers({
  signin,
  signup,
  error,
  presents,
  getPresents,
  profile,
  occasion,
  getOccasion
});
