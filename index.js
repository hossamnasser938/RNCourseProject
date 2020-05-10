import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configureAxios} from './src/utils/helperFunctions';

configureAxios();
AppRegistry.registerComponent(appName, () => App);
