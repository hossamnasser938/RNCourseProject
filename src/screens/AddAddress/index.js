import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';

export function AddAddressScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder="Name" stacked wrapperStyle={styles.input} />
        <Input placeholder="Phone" stacked wrapperStyle={styles.input} />
        <Input placeholder="City" stacked wrapperStyle={styles.input} />
        <Input placeholder="Area" stacked wrapperStyle={styles.input} />
        <Input placeholder="Street" stacked wrapperStyle={styles.input} />
        <Input placeholder="Building" stacked wrapperStyle={styles.input} />
      </View>

      <AppButton title="ADD" />
    </View>
  );
}
