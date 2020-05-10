import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
import styles from './styles';

function renderPhoneIcon() {
  return <Icon name="call" style={styles.icon} />;
}

export function SignInScreen(props) {
  const {navigation} = props;
  const [isLoading, setIsLoading] = React.useState(false);

  const [input, changeInput] = useInput('', [{key: 'isPhone'}]);

  const doneHandler = () => {
    if (input.isValid) {
      // api request
      setIsLoading(true);
      axios
        .post('/verify', {phone: input.value})
        .then(res => {
          navigation.navigate('ConfirmationCodeScreen');
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
        <Text style={styles.text}>Enter Your Phone Number</Text>
      </View>
      <Input
        style={styles.input}
        underlined
        renderIconLeft={renderPhoneIcon}
        placeholder="Phone"
        wrapperStyle={styles.inputWrapper}
        iconWrapperStyle={styles.iconWrapper}
        onChangeText={changeInput}
        keyboardType="numeric"
        onSubmitEditing={doneHandler}
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
