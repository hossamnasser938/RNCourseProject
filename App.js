import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Counter} from './src/components/PlayAround/Counter';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
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
