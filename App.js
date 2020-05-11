import React from 'react';
import {AppContainer} from './src/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_KEY, USER_KEY} from './src/utils/constants';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setToken, setUser} from './src/redux/actions';

function App(props) {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      dispatch(setToken(val));
      axios.defaults.headers.Authorization = 'Bearer ' + val;
      AsyncStorage.getItem(USER_KEY).then(user => {
        dispatch(setUser(JSON.parse(user)));
      });
    });
  }, []);

  return token !== '' && <AppContainer isAuthenticated={!!token} />;
}

export default App;
