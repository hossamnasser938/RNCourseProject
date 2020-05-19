import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {CartItem} from '../../components/CartItem';
import {useSelector} from 'react-redux';
import {totalSelector} from '../../redux/selectors';
import {EmptyList} from '../../components/EmptyList';
import {IonIcon} from '../../components/IonIcon';
import styles from './styles';

function EmptyCart() {
  return (
    <EmptyList
      renderIcon={() => <IonIcon name="cart" style={styles.cartIcon} />}
      renderText={() => <Text style={styles.emptyText}>Empty Cart</Text>}
    />
  );
}

const keyExtractor = item => item._id;

function renderCartItem({item}) {
  return <CartItem cartItem={item} />;
}

function renderCartItems(cartItems, isFetchingItems) {
  return isFetchingItems ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.list}
      data={cartItems}
      renderItem={renderCartItem}
      ListEmptyComponent={EmptyCart}
    />
  );
}

export function CartScreen(props) {
  const {navigation} = props;
  const cartItems = useSelector(state => state.cart.cartItems);
  const isFetchingItems = useSelector(state => state.cart.fetchCartItems);
  const total = useSelector(totalSelector);

  return (
    <SafeAreaView style={styles.container}>
      {renderCartItems(cartItems, isFetchingItems)}
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
