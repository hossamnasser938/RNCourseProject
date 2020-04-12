import React from 'react';
import {View, Button, Text} from 'react-native';

export function Counter(props) {
  const [counter, setCounter] = React.useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Button title="Increment" onPress={incrementHandler} />
      <Text>{counter}</Text>
      <Button title="Decrement" onPress={decrementHandler} />
    </View>
  );
}
