import React from 'react';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import {Card} from '../Card';
import {Price} from '../Price';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperFunctions';
import styles from './styles';

export function Product(props) {
  const {product} = props;
  const navigation = useNavigation();

  return (
    <PlatformTouchable
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductScreen', {productId: product._id})
      }>
      <Card>
        <Image
          source={{uri: IMAGES_URL + 'products/resized/' + product.images[0]}}
          style={styles.image}
        />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.title}>{cutLongName(product.title, 18)}</Text>
    </PlatformTouchable>
  );
}
