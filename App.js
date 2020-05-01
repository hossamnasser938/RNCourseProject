import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppContainer} from './src/navigation';

class App extends React.Component {
  render() {
    return <AppContainer isAuthenticated={true} />;
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
