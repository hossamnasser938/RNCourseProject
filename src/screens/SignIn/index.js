import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import styles from './styles';

function renderPhoneIcon() {
  return <Icon name="call" style={styles.icon} />;
}

export function SignInScreen(props) {
  const {navigation} = props;
  const isLoading = useSelector(state => state.auth.isSigningIn);
  const success = useSelector(state => state.auth.signInSuccess);
  const error = useSelector(state => state.auth.signInError);
  const dispatch = useDispatch();
  const [input, changeInput] = useInput('', [{key: 'isPhone'}]);
  useUpdateEffect(() => {
    navigation.navigate('ConfirmationCodeScreen', {phone: input.value});
  }, [success]);

  useUpdateEffect(() => {
    showError('Signin Failed');
  }, [error]);

  const doneHandler = () => {
    if (input.isValid) {
      dispatch(signIn(input.value));
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
