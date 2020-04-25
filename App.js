import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HomeScreen} from './src/screens/Home';

class App extends React.Component {
  render() {
    return <HomeScreen />;
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
