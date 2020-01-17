import { combineReducers } from 'redux';
import cpuPick from './cpuPick';
import isOpen from './isOpen';
import playerPick from './playerPick';
import score from './score';
import verdict from './verdict';

export default combineReducers({
  cpuPick,
  isOpen,
  playerPick,
  score,
  verdict,
});
