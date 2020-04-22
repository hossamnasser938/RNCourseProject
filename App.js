import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="ios-checkbox-outline" style={{fontSize: 32}} />
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
