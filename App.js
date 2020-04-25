import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Category} from './src/components/Category';
import {dummyCategory} from './src/utils/dummyData';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Category category={dummyCategory} />
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
