import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '../Product';

function renderProduct({item}) {
  return <Product product={item} />;
}

export function ProductsList(props) {
  return <FlatList {...props} renderItem={renderProduct} numColumns={2} />;
}
