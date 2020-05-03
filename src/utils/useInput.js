import React from 'react';
import {validate} from './validate';

export function useInput(initialInput, rules) {
  const [input, changeInput] = React.useState({
    value: initialInput | '',
    isValid: false,
    touched: false,
  });

  const updateInput = inputVal => {
    changeInput({
      value: inputVal,
      isValid: validate(inputVal, rules),
      touched: true,
    });
  };

  return [input, updateInput];
}
