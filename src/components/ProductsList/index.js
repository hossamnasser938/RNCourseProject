import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {Product} from '../Product';
import {EmptyList} from '../EmptyList';
import styles from './styles';

function renderProduct({item}) {
  return <Product product={item} />;
}

export function ProductsList(props) {
  const {isLoading} = props;

  const Loading = () => (isLoading ? <ActivityIndicator /> : null);

  const Empty = () => (!isLoading ? <EmptyList /> : null);

  return (
    <FlatList
      contentContainerStyle={styles.list}
      renderItem={renderProduct}
      numColumns={2}
      ListFooterComponent={Loading}
      ListEmptyComponent={Empty}
      {...props}
    />
  );
}
