import React from 'react';
import {View, Text} from 'react-native';
import {getActualPrice} from '../../utils/helperFunctions';
import {CURRENCY} from '../../utils/constants';
import styles from './styles';

export function Price(props) {
  const {price, discount} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        {CURRENCY} {getActualPrice(price, discount).toFixed(2)}
      </Text>
      {discount ? (
        <Text style={styles.oldPrice}>
          {CURRENCY} {price.toFixed(2)}
        </Text>
      ) : null}
    </View>
  );
}
