import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {updateUserName} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import styles from './styles';

export function UpdateAccountScreen(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.changeNameLoading);
  const success = useSelector(state => state.auth.updateNameSuccess);
  const error = useSelector(state => state.auth.changeNameError);
  const user = useSelector(state => state.auth.user);
  const [input, setInput] = React.useState({
    value: user.name || '',
    isValid: false,
  });

  const updateInput = value => {
    setInput({
      value,
      isValid: value !== '' && value !== user.name,
    });
  };

  useUpdateEffect(() => {
    navigation.goBack();
  }, [success]);

  useUpdateEffect(() => {
    showError(error.errorCode);
  }, [error]);

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={updateInput}
          value={input.value}
        />
      </View>

      <AppButton
        title="SAVE"
        onPress={() => dispatch(updateUserName(input.value))}
        isLoading={isLoading}
        disabled={!input.isValid}
      />
    </View>
  );
}
