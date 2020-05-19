import React from 'react';
import {Image, View, Text} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import {useNavigation} from '@react-navigation/native';
import {Card} from '../Card';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import {IMAGES_URL} from '../../utils/constants';
import {getActualPrice} from '../../utils/helperFunctions';
import styles from './styles';

export function CartItem(props) {
  const {cartItem} = props;
  const navigation = useNavigation();

  return (
    <Card style={styles.outerContainer}>
      <PlatformTouchable
        style={styles.container}
        onPress={() => navigation.navigate('ProductScreen', {productId: 1})}>
        <Image
          source={{
            uri: IMAGES_URL + 'products/resized/' + cartItem.product.images[0],
          }}
          style={styles.image}
        />
        <View style={styles.wrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {cartItem.product.title}
          </Text>
          <Price
            price={cartItem.product.price}
            discount={cartItem.product.discount}
          />
          <AddToCartButton
            productId={cartItem.product._id}
            cost={getActualPrice(
              cartItem.product.price,
              cartItem.product.discount,
            )}
            count={cartItem.product.increaseCount}
          />
        </View>
      </PlatformTouchable>
    </Card>
  );
}
