import {StyleSheet} from 'react-native';

const buttonColor = 'black';
const textColor = 'white';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: buttonColor,
    borderColor: buttonColor,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: textColor,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default styles;
