import React from 'react';
import {Text} from 'react-native';

export function Greeting(props) {
  const {name, greetingPhrase} = props;

  return (
    <Text>
      {greetingPhrase ? greetingPhrase : 'Hello'} {name ? name : 'Man'}
    </Text>
  );
}
