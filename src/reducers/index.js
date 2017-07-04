import { combineReducers } from 'redux';
import GameReducer from './GameReducer';
import ResultReducer from './ResultReducer';

export default combineReducers({
  game: GameReducer,
  result: ResultReducer
});
