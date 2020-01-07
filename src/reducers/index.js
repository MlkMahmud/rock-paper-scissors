import { combineReducers } from 'redux';
import score from './score';
import isOpen from './isOpen';

export default combineReducers({
  score,
  isOpen,
});
