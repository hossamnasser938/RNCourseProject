import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card} from '../Card';
import {Price} from '../Price';
import styles from './styles';

export function Product(props) {
  const {product} = props;

  return (
    <View style={styles.container}>
      <Card>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.title}>{product.title}</Text>
    </View>
  );
}
