import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WelcomeScreen} from './src/components/PlayAround/WelcomeScreen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeScreen />
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
