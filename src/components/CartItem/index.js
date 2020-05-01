import React from 'react';
import {Image, View, Text} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../Card';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import styles from './styles';

export function CartItem(props) {
  const {cartItem} = props;
  const navigation = useNavigation();

  return (
    <Card style={styles.outerContainer}>
      <PlatformTouchable
        style={styles.container}
        onPress={() => navigation.navigate('ProductScreen')}>
        <Image source={{uri: cartItem.product.imageUrl}} style={styles.image} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{cartItem.product.title}</Text>
          <Price
            price={cartItem.product.price}
            discount={cartItem.product.discount}
          />
          <AddToCartButton />
        </View>
      </PlatformTouchable>
    </Card>
  );
}
