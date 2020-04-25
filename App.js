import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CartItem} from './src/components/CartItem';
import {dummyCartItem} from './src/utils/dummyData';

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
  },
});

export default App;
