import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10@s',
  },
  wrapperWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  totalText: {
    fontSize: '18@s',
  },
  checkoutText: {
    fontSize: '16@s',
  },
});

export default styles;
