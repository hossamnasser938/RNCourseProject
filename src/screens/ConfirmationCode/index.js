import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN_KEY} from '../../utils/constants';
import dispatcher from '../../TryFlux/dispatcher';
import styles from './styles';

export function ConfirmationCodeScreen(props) {
  const {phone} = props.route.params;
  const [input, changeInput] = useInput('', [{key: 'isConfirmationCode'}]);
  const [isLoading, setIsLoading] = React.useState(false);

  const doneHandler = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify/validate', {phone, code: input.value})
        .then(res => {
          console.log(res.data);
          const {token, userData} = res.data;
          axios.defaults.headers.Authorization = 'Bearer ' + token;
          dispatcher.dispatch({type: 'SET_TOKEN', payload: {token}});
          dispatcher.dispatch({type: 'SET_USER', payload: {user: userData}});
          AsyncStorage.setItem(TOKEN_KEY, token);
        })
        .catch(err => {
          console.log('error', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
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
