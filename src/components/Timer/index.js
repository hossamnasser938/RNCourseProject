import React from 'react';
import {Text} from 'react-native';
import {formatTimer} from '../../utils/helperFunctions';

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: props.descending ? props.maxSeconds : 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {
          seconds: this.props.descending
            ? prevState.seconds - 1
            : prevState.seconds + 1,
        };
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    const deadlineVal = this.props.descending ? 0 : this.props.maxSeconds;

    if (this.state.seconds === deadlineVal) {
      clearInterval(this.interval);
      this.props.deadlineFunction();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Text>{formatTimer(this.state.seconds)}</Text>;
  }
}
