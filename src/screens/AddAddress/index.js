import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {addAddress} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import {errorCodeMessageMapper} from '../../utils/errorCodes';
import styles from './styles';

export function AddAddressScreen(props) {
  const [inputs, setInputs] = React.useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.addAddressLoading);
  const error = useSelector(state => state.auth.addAddressError);

  useUpdateEffect(() => {
    showError(errorCodeMessageMapper[error.errorCode]);
  }, [error]);

  const highOrderSetInput = key => {
    return value => {
      setInputs({...inputs, [key]: value});
    };
  };

  React.useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('name')}
        />
        <Input
          placeholder="Phone"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('phone')}
        />
        <Input
          placeholder="City"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('city')}
        />
        <Input
          placeholder="Area"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('area')}
        />
        <Input
          placeholder="Street"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('street')}
        />
        <Input
          placeholder="Building"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('building')}
        />
      </View>

      <AppButton
        title="ADD"
        onPress={() => {
          dispatch(addAddress(inputs));
        }}
        isLoading={isLoading}
      />
    </View>
  );
}
