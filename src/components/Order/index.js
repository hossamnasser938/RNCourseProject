import React from 'react';
import {Image, View, Text} from 'react-native';
import {Card} from '../Card';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import styles from './styles';

export function Order(props) {
  const {order} = props;
  const firstCartItem = order.cartItems[0];

  return (
    <Card style={styles.container}>
      <Image
        source={{uri: firstCartItem.product.imageUrl}}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{firstCartItem.product.title}</Text>
        <Price price={order.cost} />
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
      </View>
    </Card>
  );
}
