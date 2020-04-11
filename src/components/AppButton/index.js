import React from 'react';
import {Text} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import styles from './styles';

export class AppButton extends React.Component {
  render() {
    const {title, wrapperStyle, titleStyle, ...rest} = this.props;

    return (
      <PlatformTouchable {...rest} style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </PlatformTouchable>
    );
  }
}
