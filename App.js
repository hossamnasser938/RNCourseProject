import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CartItem} from './src/components/CartItem';
import {dummyCartItem} from './src/utils/dummyData';
import {CartScreen} from './src/screens/Cart';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CartScreen />
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
