import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

export function IonIcon(props) {
  const {name, ...rest} = props;

  return (
    <Icon
      name={Platform.select({android: 'md-', ios: 'ios-'}) + name}
      {...rest}
    />
  );
}
