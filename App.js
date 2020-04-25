import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  dummyCategory,
  dummyProductWithDiscount,
  dummyProductWithoutDiscount,
} from './src/utils/dummyData';
import {Product} from './src/components/Product';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Product product={dummyProductWithoutDiscount} />
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
