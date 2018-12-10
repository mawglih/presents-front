import { combineReducers } from 'redux';
import signin from './signin';
import signup from './signup';
import error from './error';
import presents from './present';
import getPresents from './getPresents';
import profile from './profile';

export default combineReducers({
  signin,
  signup,
  error,
  presents,
  getPresents,
  profile,
});
