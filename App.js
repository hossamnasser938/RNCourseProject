import React from 'react';
import {AppContainer} from './src/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TOKEN_KEY,
  USER_KEY,
  SELECTED_ADDRESS_ID_KEY,
} from './src/utils/constants';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  setToken,
  setUser,
  getUserData,
  selectAddress,
  fetchCartItems,
} from './src/redux/actions';
import SplashScreen from 'react-native-splash-screen';

function App(props) {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      dispatch(setToken(val));
      SplashScreen.hide();
      if (val) {
        axios.defaults.headers.Authorization = 'Bearer ' + val;
        dispatch(fetchCartItems());
        AsyncStorage.getItem(USER_KEY).then(user => {
          dispatch(setUser(JSON.parse(user)));
          dispatch(getUserData());
        });
      }
    });
  }, [token]);

  React.useEffect(() => {
    AsyncStorage.getItem(SELECTED_ADDRESS_ID_KEY).then(addId => {
      dispatch(selectAddress(addId));
    });
  }, []);

  return token !== '' && <AppContainer isAuthenticated={!!token} />;
}

export default App;
