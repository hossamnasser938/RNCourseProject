import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function validatePhone(enteredPhone) {
  if (enteredPhone.length !== 11) {
    return false;
  }

  return /^[0-9]+$/.test(enteredPhone);
}

function App(props) {
  const [inputVal, changeInput] = React.useState('');
  const submitHandler = () => {
    if (!validatePhone(inputVal)) {
      alert('you entered something wrong');
      return;
    }

    alert('you entered ' + inputVal);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Phone"
        style={styles.input}
        onChangeText={changeInput}
      />
      <Button title="SUBMIT" onPress={submitHandler} />
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
