import React from 'react';
import {AppContainer} from './src/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_KEY} from './src/utils/constants';
import axios from 'axios';

function App(props) {
  const [token, setToken] = React.useState('NOT_YET');

  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      setToken(val);
      axios.defaults.headers.Authorization = 'Bearer ' + val;
    });
  }, []);

  return token !== 'NOT_YET' && <AppContainer isAuthenticated={!!token} />;
}

export default App;
