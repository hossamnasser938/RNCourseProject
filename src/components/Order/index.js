import React from 'react';
import {Image, View, Text} from 'react-native';
import {Card} from '../Card';
import {Price} from '../Price';
import {IMAGES_URL, orderStatusMapper} from '../../utils/constants';
import styles from './styles';

export function Order(props) {
  const {order} = props;
  const firstCartItem = order.items[0];

  return (
    <Card style={styles.container}>
      <Image
        source={{
          uri:
            IMAGES_URL + 'products/resized/' + firstCartItem.product.images[0],
        }}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {firstCartItem.product.title}
        </Text>
        <Price price={order.totalCost} />
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>
            {orderStatusMapper[order.status]}
          </Text>
        </View>
      </View>
    </Card>
  );
}
