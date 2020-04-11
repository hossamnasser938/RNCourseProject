import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppText} from './src/components/PlayAround/AppText';
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppText style={{color: 'purple'}}>Text 1</AppText>
        <AppText>Text 2</AppText>
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
