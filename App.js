import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchScreen} from './src/screens/Search';

class App extends React.Component {
  render() {
    return <SearchScreen />;
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
