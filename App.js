import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AddAddressScreen} from './src/screens/AddAddress';

class App extends React.Component {
  render() {
    return <AddAddressScreen />;
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
