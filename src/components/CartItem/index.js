import React from 'react';
import {Image, View, Text} from 'react-native';
import {Card} from '../Card';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import styles from './styles';

export function CartItem(props) {
  const {cartItem} = props;

  return (
    <Card style={styles.container}>
      <Image source={{uri: cartItem.product.imageUrl}} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{cartItem.product.title}</Text>
        <Price
          price={cartItem.product.price}
          discount={cartItem.product.discount}
        />
        <AddToCartButton />
      </View>
    </Card>
  );
}
