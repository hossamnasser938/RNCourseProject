import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Greeting} from './src/components/PlayAround/FunctionalGreeting';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Mostafa" />
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
