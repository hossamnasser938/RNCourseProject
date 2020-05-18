import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '50@s',
    paddingVertical: '10@vs',
  },
  okText: {
    color: TINT_COLOR,
  },
  ordeRDoneText: {
    marginVertical: '10@vs',
  },
  congratesText: {
    fontSize: 20,
    marginVertical: '10@vs',
  },
  icon: {
    color: TINT_COLOR,
    fontSize: '64@s',
    marginVertical: '10@vs',
  },
});

export default styles;
