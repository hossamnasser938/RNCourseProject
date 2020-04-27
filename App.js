import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CartItem} from './src/components/CartItem';
import {dummyCartItem} from './src/utils/dummyData';
import {CartScreen} from './src/screens/Cart';
import {CheckoutScreen} from './src/screens/Checkout';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CheckoutScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
