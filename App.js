import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AccountScreen} from './src/screens/Account';

class App extends React.Component {
  render() {
    return <AccountScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
