import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CameraIcon} from './src/components/PlayAround/CameraIcon';
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CameraIcon dim={32} />
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
