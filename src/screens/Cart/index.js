import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {CartItem} from '../../components/CartItem';
import {useSelector} from 'react-redux';
import {totalSelector} from '../../redux/selectors';
import styles from './styles';

function renderCartItem({item}) {
  return <CartItem cartItem={item} />;
}

function renderCartItems(cartItems) {
  return <FlatList data={cartItems} renderItem={renderCartItem} />;
}

export function CartScreen(props) {
  const {navigation} = props;
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = useSelector(totalSelector);

  return (
    <SafeAreaView style={styles.container}>
      {renderCartItems(cartItems)}
      <View style={styles.wrapper}>
        <Text style={styles.totalText}>Total = ${total} $</Text>
        <AppButton
          title="CHECKOUT"
          titleStyle={styles.checkoutText}
          onPress={() => {
            navigation.navigate('CheckoutScreen');
          }}
          disabled={cartItems.length === 0}
        />
      </View>
    </SafeAreaView>
  );
}
