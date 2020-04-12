import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AddToCartButton} from './src/components/AddToCartButton';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddToCartButton />
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
