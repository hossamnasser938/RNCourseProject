import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {CLEAR_REDUX_DATA} from '../actions/ActionTypes';

const rootReducer = combineReducers({auth: authReducer});

const appReducer = (state, action) => {
  if (action.type === CLEAR_REDUX_DATA) {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export default appReducer;
