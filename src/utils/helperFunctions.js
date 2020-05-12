import axios from 'axios';

export const formatTimer = totalSeconds => {
  const seconds = totalSeconds % 60;
  const minutes = (totalSeconds - seconds) / 60;

  return appendZero(minutes) + ':' + appendZero(seconds);
};

const appendZero = val => {
  if (val >= 0 && val <= 9) {
    return '0' + val;
  }

  return val;
};

export const getActualPrice = (price, discount) => {
  if (discount) {
    return price - price * discount;
  }

  return price;
};

export const configureAxios = () => {
  axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
};

export const showError = errorMessage => {
  alert(errorMessage);
};
