import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {dummyCategory} from './src/utils/dummyData';
import {Price} from './src/components/Price';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Price price={100} discount={0.2} />
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
