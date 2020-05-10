import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import styles from './styles';

export class AppButton extends React.Component {
  render() {
    const {
      title,
      wrapperStyle,
      titleStyle,
      isLoading,
      disabled,
      ...rest
    } = this.props;

    return (
      <PlatformTouchable
        {...rest}
        disabled={disabled || isLoading}
        style={[
          styles.wrapper,
          wrapperStyle,
          disabled ? styles.disabled : null,
        ]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </PlatformTouchable>
    );
  }
}
