import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({auth: authReducer});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
