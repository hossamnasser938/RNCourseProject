import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HomeTabs} from './HomeTabs';

export function AppContainer(props) {
  const {isAuthenticated, setToken} = props;

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
