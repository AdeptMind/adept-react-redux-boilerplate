import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import exampleReducer from './base';

export default combineReducers({
  adept : combineReducers({
    routing: routerReducer,
    example: exampleReducer,
  })
});
