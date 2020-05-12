import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';
import Reactotron from '../../ReactotronConfig';

const rootReducer = combineReducers({auth: authReducer});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger),
    Reactotron.createEnhancer(),
  ),
);

export default store;
