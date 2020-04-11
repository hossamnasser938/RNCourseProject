import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export class WelcomeScreenMainButton extends React.Component {
  render() {
    return (
      <View style={styles.mainButtonWrapper}>
        <Text style={styles.mainButtonText}>Start Shopping</Text>
      </View>
    );
  }
}
