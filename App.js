import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/images/camera.png')} />
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
