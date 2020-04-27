import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UpdateAccountScreen} from './src/screens/UpdateAccount';

class App extends React.Component {
  render() {
    return <UpdateAccountScreen />;
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
