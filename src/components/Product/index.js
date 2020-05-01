import React from 'react';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import {Card} from '../Card';
import {Price} from '../Price';
import styles from './styles';

export function Product(props) {
  const {product} = props;
  const navigation = useNavigation();

  return (
    <PlatformTouchable
      style={styles.container}
      onPress={() => navigation.navigate('ProductScreen', {productId: 1})}>
      <Card>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.title}>{product.title}</Text>
    </PlatformTouchable>
  );
}
