import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {CURRENCY} from '../../utils/constants';
import {Address} from '../../components/Address';
import {useSelector, useDispatch} from 'react-redux';
import {totalSelector} from '../../redux/selectors';
import {PlatformTouchable} from '../../components/PlatformTouchable';
import {makeOrder} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {OrderDone} from '../../components/OderDone';
import styles from './styles';

function renderAddressSection(address, navigation) {
  return (
    <PlatformTouchable
      style={styles.addressSection}
      onPress={() => {
        navigation.navigate('AddAddressScreen');
      }}>
      <Text style={styles.shipToText}>SHIP TO</Text>
      {address ? (
        <Address address={address} />
      ) : (
        <Text style={styles.hitToEnterAddressText}>HIT to select address</Text>
      )}
      <View style={styles.updateWrapper}>
        <Text style={styles.updateText}>UPDATE</Text>
      </View>
    </PlatformTouchable>
  );
}

function renderOrderCostRow(key, value) {
  return (
    <View style={styles.orderCostRow}>
      <Text style={styles.orderCostKey}>{key}</Text>
      <Text style={styles.orderCostValue}>{value}</Text>
    </View>
  );
}

function renderOrderCostSection(total) {
  return (
    <View style={styles.orderCostSection}>
      {renderOrderCostRow('Subtotal', CURRENCY + total)}
      {renderOrderCostRow('Shipping', 'free')}
      <View style={styles.horizontalRow} />
      {renderOrderCostRow('Total', CURRENCY + total)}
    </View>
  );
}

function renderButton(address, dispatch) {
  return (
    <AppButton
      title="BUY"
      disabled={!address}
      onPress={() => {
        dispatch(makeOrder());
      }}
    />
  );
}

export function CheckoutScreen(props) {
  const {navigation} = props;
  const [shouldShowSuccess, setShouldShowSuccess] = React.useState(false);
  const addresses = useSelector(state => state.auth.user.addresses);
  const selectedAddressId = useSelector(state => state.auth.selectedAddressId);

  const address = addresses.find(item => item._id === selectedAddressId);
  const total = useSelector(totalSelector);
  const success = useSelector(state => state.cart.makeOrderSuccess);

  const dispatch = useDispatch();

  useUpdateEffect(() => {
    setShouldShowSuccess(true);
  }, [success]);

  return (
    <View style={styles.container}>
      {renderAddressSection(address, navigation)}
      {renderOrderCostSection(total)}
      {renderButton(address, dispatch)}
      {shouldShowSuccess && (
        <View style={styles.successWrapper}>
          <OrderDone
            okHandler={() => {
              setShouldShowSuccess(false);
            }}
          />
        </View>
      )}
    </View>
  );
}
