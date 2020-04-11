import React from 'react';
import {Text} from 'react-native';

export class Greeting extends React.Component {
  render() {
    const {name, greetingPhrase} = this.props;

    return (
      <Text>
        {greetingPhrase ? greetingPhrase : 'Hello'} {name ? name : 'Man'}
      </Text>
    );
  }
}
