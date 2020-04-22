import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from './src/components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input placeholder="Email" stacked />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});

export default App;
