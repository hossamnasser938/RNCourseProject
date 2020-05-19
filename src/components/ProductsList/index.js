import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {Product} from '../Product';
import {EmptyList} from '../EmptyList';
import styles from './styles';

function renderProduct({item}) {
  return <Product product={item} />;
}

const keyExtractor = item => item._id;

export function ProductsList(props) {
  const {isLoading} = props;

  const Loading = React.useCallback(
    () => (isLoading ? <ActivityIndicator /> : null),
    [isLoading],
  );

  const Empty = React.useCallback(() => (!isLoading ? <EmptyList /> : null), [
    isLoading,
  ]);

  return (
    <FlatList
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.list}
      renderItem={renderProduct}
      numColumns={2}
      ListFooterComponent={Loading}
      ListEmptyComponent={Empty}
      {...props}
    />
  );
}
