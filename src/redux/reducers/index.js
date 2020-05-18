import {combineReducers} from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import {CLEAR_REDUX_DATA} from '../actions/ActionTypes';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  cart: cartReducer,
  search: searchReducer,
});

const appReducer = (state, action) => {
  if (action.type === CLEAR_REDUX_DATA) {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export default appReducer;
