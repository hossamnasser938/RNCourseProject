import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {updateUserName} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import {errorCodeMessageMapper} from '../../utils/errorCodes';
import styles from './styles';

export function UpdateAccountScreen(props) {
  const {navigation} = props;
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.changeNameLoading);
  const success = useSelector(state => state.auth.updateNameSuccess);
  const error = useSelector(state => state.auth.changeNameError);

  useUpdateEffect(() => {
    navigation.goBack();
  }, [success]);

  useUpdateEffect(() => {
    showError(errorCodeMessageMapper[error.errorCode]);
  }, [error]);

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={setInput}
        />
      </View>

      <AppButton
        title="SAVE"
        onPress={() => dispatch(updateUserName(input))}
        isLoading={isLoading}
      />
    </View>
  );
}
