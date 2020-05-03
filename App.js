import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function validatePhone(enteredPhone) {
  if (enteredPhone.length !== 11) {
    return false;
  }

  return /^[0-9]+$/.test(enteredPhone);
}

function App(props) {
  const [input, changeInput] = React.useState({value: '', isValid: false});

  const updateInput = inputVal => {
    changeInput({value: inputVal, isValid: validatePhone(inputVal)});
  };

  const submitHandler = () => {
    if (!input.isValid) {
      alert('you entered something wrong');
      return;
    }

    alert('you entered ' + input.value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Phone"
        style={styles.input}
        onChangeText={updateInput}
      />
      <Button title="SUBMIT" onPress={submitHandler} />
      <Text>Your input is valid? {input.isValid.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});

export default App;
