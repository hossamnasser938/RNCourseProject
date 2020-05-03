const ruleValidatorMapper = {
  isPhone: validatePhone,
  isMinimumChars: validateIsMinimumChars,
};

function validateIsMinimumChars(inputValue, {minimumChars}) {
  return inputValue.length >= minimumChars;
}

function validatePhone(enteredPhone) {
  if (enteredPhone.length !== 11) {
    return false;
  }

  return /^[0-9]+$/.test(enteredPhone);
}

export function validate(userInput, rules) {
  let isValid = true;

  for (let rule of rules) {
    isValid = isValid && ruleValidatorMapper[rule.key](userInput, rule);
  }

  return isValid;
}
