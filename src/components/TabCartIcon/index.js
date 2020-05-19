import React from 'react';
import {View, Text} from 'react-native';
import {IonIcon} from '../IonIcon';
import {useSelector} from 'react-redux';
import styles from './styles';

export function TabCartIcon(props) {
  const {focused} = props;
  const cartItemsCount = useSelector(state => state.cart.cartItems.length);

  return (
    <View>
      <IonIcon
        name="cart"
        style={[styles.icon, focused && styles.focusedIcon]}
      />
      {cartItemsCount ? (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>{cartItemsCount}</Text>
        </View>
      ) : null}
    </View>
  );
}
