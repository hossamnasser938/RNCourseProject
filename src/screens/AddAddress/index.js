import React from 'react';
import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {addAddress} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import {Address} from '../../components/Address';
import styles from './styles';

export function AddAddressScreen(props) {
  const [inputs, setInputs] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useDispatch();
  const isAddingAddress = useSelector(state => state.auth.addAddressLoading);
  const isFetchingUserData = useSelector(state => state.auth.addAddressLoading);
  const error = useSelector(state => state.auth.addAddressError);
  const success = useSelector(state => state.auth.addAddressSuccess);
  const user = useSelector(state => state.auth.user);

  useUpdateEffect(() => {
    showError(error.errorCode);
  }, [error]);

  useUpdateEffect(() => {
    setInputs({});
  }, [success]);

  const highOrderSetInput = key => {
    return value => {
      setInputs({
        ...inputs,
        [key]: value,
      });
    };
  };

  React.useEffect(() => {
    setIsValid(
      inputs.name &&
        inputs.phone &&
        inputs.city &&
        inputs.area &&
        inputs.street &&
        inputs.building,
    );
  }, [inputs]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('name')}
          value={inputs.name || ''}
        />
        <Input
          placeholder="Phone"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('phone')}
          value={inputs.phone || ''}
        />
        <Input
          placeholder="City"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('city')}
          value={inputs.city || ''}
        />
        <Input
          placeholder="Area"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('area')}
          value={inputs.area || ''}
        />
        <Input
          placeholder="Street"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('street')}
          value={inputs.street || ''}
        />
        <Input
          placeholder="Building"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('building')}
          value={inputs.building || ''}
        />

        <Text style={styles.headerTitle}>Added Addresses</Text>

        {isFetchingUserData ? <ActivityIndicator /> : null}

        {user.addresses.map(address => {
          return <Address address={address} />;
        })}
      </ScrollView>

      <AppButton
        title="ADD"
        onPress={() => {
          dispatch(addAddress(inputs));
        }}
        isAddingAddress={isAddingAddress}
        disabled={!isValid}
      />
    </View>
  );
}
