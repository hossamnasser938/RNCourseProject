import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';

export function UpdateAccountScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder="Name" stacked wrapperStyle={styles.input} />
        <Input placeholder="Phone" stacked wrapperStyle={styles.input} />
      </View>

      <AppButton title="SAVE" />
    </View>
  );
}
