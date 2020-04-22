import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import styles from './styles';

export function ConfirmationCodeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Confirmation Code</Text>
      </View>
      <Input
        style={styles.input}
        bordered
        placeholder="__ __ __ __"
        placeholderPosition="center"
        wrapperStyle={styles.inputWrapper}
        iconWrapperStyle={styles.iconWrapper}
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" />
      </View>
    </View>
  );
}
