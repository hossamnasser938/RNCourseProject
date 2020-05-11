import React from 'react';
import {AppContainer} from './src/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_KEY} from './src/utils/constants';
import authStore from './src/TryFlux/AuthStore';
import dispatcher from './src/TryFlux/dispatcher';
import axios from 'axios';

function App(props) {
  const [token, setToken] = React.useState(authStore.token);

  const handleTokenChange = () => {
    setToken(authStore.token);
  };

  React.useEffect(() => {
    authStore.on('change', handleTokenChange);
  }, []);

  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      dispatcher.dispatch({type: 'SET_TOKEN', payload: {token: val}});
      axios.defaults.headers.Authorization = 'Bearer ' + val;
    });
  }, []);

  return token !== '' && <AppContainer isAuthenticated={!!token} />;
}

export default App;
