import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '10@s',
  },
  input: {
    marginBottom: '20@vs',
  },
  headerTitle: {
    fontSize: 22,
  },
});

export default styles;
