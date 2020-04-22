import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import styles from './styles';

function renderPhoneIcon() {
  return <Icon name="call" style={styles.icon} />;
}

export function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Your Phone Number</Text>
      </View>
      <Input
        style={styles.input}
        underlined
        renderIconLeft={renderPhoneIcon}
        placeholder="Phone"
        wrapperStyle={styles.inputWrapper}
        iconWrapperStyle={styles.iconWrapper}
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" />
      </View>
    </View>
  );
}