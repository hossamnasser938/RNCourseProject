import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {PlatformTouchable} from './src/components/PlatformTouchable';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlatformTouchable>
          <Text>Click Me</Text>
        </PlatformTouchable>
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
