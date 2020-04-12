import React from 'react';
import {View, Button, Text} from 'react-native';

export class Counter extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      counter: 0,
    };

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState) {
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  incrementHandler() {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }

  decrementHandler() {
    this.setState(prevState => ({counter: prevState.counter - 1}));
  }

  render() {
    console.log('render');

    return (
      <View style={{alignItems: 'center'}}>
        <Button title="Increment" onPress={this.incrementHandler} />
        <Text>{this.state.counter}</Text>
        <Button title="Decrement" onPress={this.decrementHandler} />
      </View>
    );
  }
}
