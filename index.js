import 'react-native-gesture-handler';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  configureAxios,
  configureApiRequestBoilerplateActions,
} from './src/utils/helperFunctions';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Reactotron from './ReactotronConfig';

global.r = Reactotron;

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

configureAxios();
configureApiRequestBoilerplateActions();
AppRegistry.registerComponent(appName, () => ConnectedApp);
