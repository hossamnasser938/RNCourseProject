import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Order} from './src/components/Order';
import {dummyOrder, dummyCartItem} from './src/utils/dummyData';
import {CartItem} from './src/components/CartItem';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CartItem cartItem={dummyCartItem} />
      </View>
    );
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
