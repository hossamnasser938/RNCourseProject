import React from 'react';
import {View, Button, Text} from 'react-native';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }

  decrementHandler() {
    this.setState(prevState => ({counter: prevState.counter - 1}));
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Button title="Increment" onPress={this.incrementHandler} />
        <Text>{this.state.counter}</Text>
        <Button title="Decrement" onPress={this.decrementHandler} />
      </View>
    );
  }
}
