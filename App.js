import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SignUpScreen} from './src/components/PlayAround/ResponsiveLayout';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

class App extends React.Component {
  componentDidMount() {
    const TESTING_DEVICE_WIDTH = 414;

    const rem = Dimensions.get('window').width / TESTING_DEVICE_WIDTH;

    EStyleSheet.build({
      $rem: rem,
    });
  }

  render() {
    return <SignUpScreen />;
  }
}

export default App;
