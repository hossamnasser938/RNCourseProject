import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Timer} from './src/components/Timer';
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer
          maxSeconds={5}
          descending={false}
          deadlineFunction={() => alert('ended')}
        />
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
