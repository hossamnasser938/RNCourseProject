import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({auth: authReducer});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
