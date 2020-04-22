import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '20@s',
    paddingTop: '50@vs',
  },
  textWrapper: {
    alignItems: 'center',
  },
  text: {
    fontSize: '20@s',
  },
  inputWrapper: {
    marginTop: '70@vs',
  },
  icon: {
    fontSize: 24,
  },
  iconWrapper: {
    marginEnd: '10@vs',
  },
  input: {
    paddingBottom: '10@vs',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '20@vs',
  },
});

export default styles;
