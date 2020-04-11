import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Greeting} from './src/components/PlayAround/Greeting';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting />
        <Greeting name="Ahmed" />
        <Greeting name="Mostafa" />
        <Greeting greetingPhrase="Hi" name="Mostafa" />
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
