import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {Order} from '../../components/Order';
import {getOrders} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import {EmptyList} from '../../components/EmptyList';
import styles from './styles';

function renderOrder({item}) {
  return <Order order={item} />;
}

function renderOrders(orders, isFetchingOrders) {
  const Empty = () => (!isFetchingOrders ? <EmptyList /> : null);

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={orders}
      renderItem={renderOrder}
      ListEmptyComponent={Empty}
    />
  );
}

export function OrdersScreen(props) {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.getOrdersError);
  const isFetchingOrders = useSelector(state => state.auth.getOrdersLoading);
  const orders = useSelector(state => state.auth.orders);

  React.useEffect(() => {
    dispatch(getOrders());
  }, []);

  useUpdateEffect(() => {
    showError(error.errorCode);
  }, [error]);

  return (
    <View style={styles.container}>
      {isFetchingOrders ? (
        <ActivityIndicator />
      ) : (
        renderOrders(orders, isFetchingOrders)
      )}
    </View>
  );
}
