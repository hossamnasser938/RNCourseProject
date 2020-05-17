import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '10@s',
  },
  input: {
    marginBottom: '20@vs',
  },
  seletedaddress: {
    color: TINT_COLOR,
  },
});

export default styles;
