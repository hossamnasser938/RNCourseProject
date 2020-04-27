import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {CURRENCY} from '../../utils/constants';
import styles from './styles';

function renderAddressSection() {
  return (
    <View style={styles.addressSection}>
      <Text style={styles.shipToText}>SHIP TO</Text>
      <Text>{`some address,
  bla bla bla`}</Text>
      <View style={styles.updateWrapper}>
        <Text style={styles.updateText}>UPDATE</Text>
      </View>
    </View>
  );
}

function renderOrderCostRow(key, value) {
  return (
    <View style={styles.orderCostRow}>
      <Text style={styles.orderCostKey}>{key}</Text>
      <Text style={styles.orderCostValue}>{value}</Text>
    </View>
  );
}

function renderOrderCostSection() {
  return (
    <View style={styles.orderCostSection}>
      {renderOrderCostRow('Subtotal', CURRENCY + '160')}
      {renderOrderCostRow('Shipping', 'free')}
      <View style={styles.horizontalRow} />
      {renderOrderCostRow('Total', CURRENCY + '160')}
    </View>
  );
}

function renderButton() {
  return <AppButton title="BUY" />;
}

export function CheckoutScreen(props) {
  return (
    <View style={styles.container}>
      {renderAddressSection()}
      {renderOrderCostSection()}
      {renderButton()}
    </View>
  );
}
