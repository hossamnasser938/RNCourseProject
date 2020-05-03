import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import {validate} from '../../utils/validate';
import styles from './styles';

export function ConfirmationCodeScreen(props) {
  const [input, changeInput] = React.useState({
    value: '',
    isValid: false,
    touched: false,
  });

  const updateInput = inputVal => {
    changeInput({
      value: inputVal,
      isValid: validate(inputVal, [{key: 'isConfirmationCode'}]),
      touched: true,
    });
  };

  const doneHandler = () => {
    if (!input.isValid) {
      alert('the confirmation code is not correct');
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
        onChangeText={updateInput}
        onSubmitEditing={doneHandler}
        keyboardType="numeric"
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" onPress={doneHandler} />
      </View>
    </View>
  );
}
