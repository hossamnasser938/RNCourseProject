import {ScaledSheet} from 'react-native-size-matters';

const imageDim = 100;

const styles = ScaledSheet.create({
  wrappper: {
    padding: 5,
  },
  image: {
    width: imageDim,
    height: imageDim,
    borderRadius: 0.5 * imageDim,
  },
  title: {
    textAlign: 'center',
  },
});

export default styles;
