import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/colors';

const badgeWrapperDim = 20;

const styles = ScaledSheet.create({
  badgeWrapper: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'red',
    width: badgeWrapperDim,
    height: badgeWrapperDim,
    borderRadius: 0.5 * badgeWrapperDim,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
  },
  icon: {
    fontSize: 24,
  },
  focusedIcon: {
    color: TINT_COLOR,
  },
});

export default styles;
