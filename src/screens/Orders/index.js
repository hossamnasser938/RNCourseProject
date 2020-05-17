import React from 'react';
import {View, FlatList} from 'react-native';
import {Order} from '../../components/Order';
import {getOrders} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import styles from './styles';

function renderOrder({item}) {
  return <Order order={item} />;
}

function renderOrders(orders) {
  return <FlatList data={orders} renderItem={renderOrder} />;
}

export function OrdersScreen(props) {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.getOrdersError);
  const orders = useSelector(state => state.auth.orders);

  React.useEffect(() => {
    dispatch(getOrders());
  }, []);

  useUpdateEffect(() => {
    showError(error.errorCode);
  }, [error]);

  return <View style={styles.container}>{renderOrders(orders)}</View>;
}
