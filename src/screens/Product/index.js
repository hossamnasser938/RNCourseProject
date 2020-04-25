import React from 'react';
import {View, Text, Image} from 'react-native';
import {dummyProductWithDiscount} from '../../utils/dummyData';
import {IonIcon} from '../../components/IonIcon';
import {Price} from '../../components/Price';
import {AddToCartButton} from '../../components/AddToCartButton';
import styles from './styles';

function getProduct(productId) {
  return dummyProductWithDiscount;
}

export function ProductScreen(props) {
  const {productId} = props;

  const product = getProduct(productId);

  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.productTitleWrapper}>
        <IonIcon name={'arrow-back'} style={styles.icon} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{product.title}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Price price={product.price} discount={product.discount} />
        <Text style={styles.descriptionText}>Description</Text>
        <Text>{product.description}</Text>
        <View style={styles.buttonWrapper}>
          <AddToCartButton />
        </View>
      </View>
    </View>
  );
}
