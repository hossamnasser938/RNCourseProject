import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export function Card(props) {
  const {style, ...rest} = props;

  return <View {...rest} style={[styles.container, style]} />;
}
