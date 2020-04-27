import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Order} from './src/components/Order';
import {dummyOrder} from './src/utils/dummyData';
import {OrdersScreen} from './src/screens/Orders';

class App extends React.Component {
  render() {
    return <OrdersScreen />;
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
