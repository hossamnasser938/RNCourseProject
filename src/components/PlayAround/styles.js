import {StyleSheet} from 'react-native';

const welcomeScreenTintColor = '#f24c91';

const styles = StyleSheet.create({
  mainButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: welcomeScreenTintColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: welcomeScreenTintColor,
  },
  mainButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: welcomeScreenTintColor,
  },
  screenContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
