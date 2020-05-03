import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
import styles from './styles';

export function ConfirmationCodeScreen(props) {
  const [input, changeInput] = useInput('', [{key: 'isConfirmationCode'}]);

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
        onChangeText={changeInput}
        onSubmitEditing={doneHandler}
        keyboardType="numeric"
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" onPress={doneHandler} />
      </View>
    </View>
  );
}
