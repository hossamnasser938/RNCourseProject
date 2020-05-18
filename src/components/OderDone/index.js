import React from 'react';
import {Text} from 'react-native';
import {IonIcon} from '../IonIcon';
import {Card} from '../Card';
import styles from './styles';

export function OrderDone(props) {
  const {okHandler} = props;

  return (
    <Card style={styles.container}>
      <IonIcon name="checkmark-circle-outline" style={styles.icon} />

      <Text style={styles.congratesText}>Congrates</Text>
      <Text style={styles.ordeRDoneText}>Your Order is Done</Text>
      <Text onPress={okHandler} style={styles.okText}>
        Ok
      </Text>
    </Card>
  );
}
