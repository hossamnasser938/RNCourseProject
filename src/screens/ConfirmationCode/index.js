import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {confirmCode} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import styles from './styles';

export function ConfirmationCodeScreen(props) {
  const {phone} = props.route.params;
  const [input, changeInput] = useInput('', [{key: 'isConfirmationCode'}]);
  const isLoading = useSelector(state => state.auth.isConfirmingCode);
  const failure = useSelector(state => state.auth.confirmCodeFailure);
  const dispatch = useDispatch();

  useUpdateEffect(() => {
    showError(failure.errorCode);
  }, [failure]);

  const doneHandler = () => {
    if (input.isValid) {
      dispatch(confirmCode(phone, input.value));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Confirmation Code</Text>
      </View>
      <Input
        style={styles.input}
        bordered
        placeholder="__ __ __ __"
        placeholderPosition="center"
        wrapperStyle={styles.inputWrapper}
        iconWrapperStyle={styles.iconWrapper}
        onChangeText={changeInput}
        onSubmitEditing={doneHandler}
        keyboardType="numeric"
      />
      <View style={styles.buttonWrapper}>
        <AppButton
          title="DONE"
          onPress={doneHandler}
          disabled={!input.isValid}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
