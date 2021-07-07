import { combineReducers } from 'redux';
import characters from './characterReducer';
import character from './charReducer';

export default combineReducers({
  characters,
  character
});
