import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  price: {
    fontSize: '16@s',
    color: TINT_COLOR,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#bbb',
    paddingHorizontal: '5@s',
  },
});

export default styles;
