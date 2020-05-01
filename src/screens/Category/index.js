import React from 'react';
import {View, Text} from 'react-native';
import {Product} from '../../components/Product';
import {dummyProduct1} from '../../utils/dummyData';
import styles from './styles';

export function CategoryScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProduct1} />
    </View>
  );
}
