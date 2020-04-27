import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const styles = ScaledSheet.create({
  image: {
    width: '100@s',
    height: '100@s',
    marginEnd: '10@s',
  },
  container: {
    flexDirection: 'row',
    padding: '10@s',
    margin: '10@s',
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  statusWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: '15@s',
  },
  statusText: {
    fontSize: '16@s',
    color: TINT_COLOR,
    fontWeight: 'bold',
  },
});

export default styles;
