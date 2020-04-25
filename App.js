import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProductScreen} from './src/screens/Product';

class App extends React.Component {
  render() {
    return <ProductScreen />;
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
