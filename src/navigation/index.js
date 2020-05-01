import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function AuthStack(props) {
  return <Text>Auth Stack</Text>;
}

function HomeTabs(props) {
  return <Text>Home Tabs</Text>;
}

export function AppContainer(props) {
  const {isAuthenticated} = props;

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
