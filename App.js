import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppButton} from './src/components/AppButton';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppButton title="DONE" onPress={() => alert('Say')} />
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
