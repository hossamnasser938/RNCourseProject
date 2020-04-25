import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CategoryScreen} from './src/screens/Category';

class App extends React.Component {
  render() {
    return <CategoryScreen />;
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
