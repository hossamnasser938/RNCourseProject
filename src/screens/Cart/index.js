import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {CartItem} from '../../components/CartItem';
import {dummyCartItems} from '../../utils/dummyData';
import styles from './styles';

function renderCartItem({item}) {
  return <CartItem cartItem={item} />;
}

function renderCartItems(cartItems) {
  return <FlatList data={cartItems} renderItem={renderCartItem} />;
}

export function CartScreen(props) {
  return (
    <View style={styles.container}>
      {renderCartItems(dummyCartItems)}
      <View style={styles.wrapper}>
        <Text style={styles.totalText}>Total = 3456 $</Text>
        <AppButton title="CHECKOUT" titleStyle={styles.checkoutText} />
      </View>
    </View>
  );
}
