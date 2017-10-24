import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import timerReducer from './timer';

export default combineReducers({
  routing: routerReducer,
  timer: timerReducer,
});
