import React from 'react';
import {Text} from 'react-native';
import {formatTimer} from '../../utils/helperFunctions';

export function Timer(props) {
  const [seconds, setSeconds] = React.useState(
    props.descending ? props.maxSeconds : 0,
  );

  let interval;

  React.useEffect(() => {
    interval = setInterval(() => {
      setSeconds(prevSeconds =>
        props.descending ? prevSeconds - 1 : prevSeconds + 1,
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  React.useEffect(() => {
    const deadlineVal = props.descending ? 0 : props.maxSeconds;

    if (seconds === deadlineVal) {
      clearInterval(interval);
      props.deadlineFunction();
    }
  }, [seconds]);

  return <Text>{formatTimer(seconds)}</Text>;
}
